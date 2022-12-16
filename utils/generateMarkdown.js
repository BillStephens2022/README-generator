// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'not listed/none') {
    return '';
  } else {
    const licenseLink = renderLicenseLink(license);
    return `## License
  This application is covered under the ${license}.
  <br>For more information: ${licenseLink}`; 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}<br>${licenseBadge}

  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
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
  Additional questions?<br>
  GitHub user name: ${data.githubUserName}<br>
  Link to GitHub profile: https://github.com/${data.githubUserName}<br>
  Contact me at: ${data.userEmail}
`;
}

module.exports = generateMarkdown;
