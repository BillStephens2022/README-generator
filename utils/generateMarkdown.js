// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description

  ${data.description}
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [How to Contribute](#how-to-contribute)
  - [Test Instructions](#test-instructions)
  
  ## Installation
  
  ${data.installInstructions}
  
  
  ## Usage
  
  ${data.usageInstructions}
  
  ## Credits

  ${data.credits}
  
  
  ## License
  
  ${data.license}
  
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  
  ## How to Contribute
  ${data.contributionGuidelines}
  
  ## Test Instructions
  ${data.testInstructions}

`;
}

module.exports = generateMarkdown;
