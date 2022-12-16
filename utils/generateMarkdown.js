// Function for rendering the License Badge.  If no license, generates an empty string.
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } 
  else if (license === 'GPL License') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  else if (license === 'BSD License') {
    return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } 
  else if (license === 'ISC License') {
    return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
  }
  else if (license === 'Apache License') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else {
    return '';
  };
}

// Function for rendering the License link.  If no license, generates an empty string.
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  } 
  else if (license === 'GPL License') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  else if (license === 'BSD License') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } 
  else if (license === 'ISC License') {
    return 'https://opensource.org/licenses/ISC';
  }
  else if (license === 'Apache License') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else {
    return '';
  };
}

// Function for rendering the License Section of the README file.  If no license, renders an empty string.
function renderLicenseSection(license) {
  if (license === 'not listed/none') {
    return '';
  } else {
    const licenseLink = renderLicenseLink(license);
    return `## License
This application is covered under the ${license}.
<br>For more information: ${licenseLink}`; 
  };
}

// function to generate the Markdown Language which will ultimately be written into the README file.
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  let licenseTableOfContents = '';
  if (licenseSection !== '') {
    licenseTableOfContents = "- [License](#license)";
  };
  return `# ${data.title}<br>${licenseBadge}

  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseTableOfContents}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installInstructions}
  
  ## Usage
  
  ${data.usageInstructions}

  ${licenseSection}
  
  ## Contributing
  ${data.contributionGuidelines}
  
  ## Tests
  ${data.testInstructions}

  ## Questions
  Contact Info<br>
  GitHub user name: ${data.githubUserName}<br>
  Link to GitHub profile: https://github.com/${data.githubUserName}<br>
  Email: ${data.userEmail}
`;
}

// exports generateMarkdown function so that it can be imported by the index.js file.
module.exports = generateMarkdown;
