// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquire = require('inquire');
const { default: inquirer } = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions: ',
        name: 'installInstructions',
    },
    {
        type: 'input',
        message: 'Enter usage instructions: ',
        name: 'usageInstructions',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines: ',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message:  'Enter test instructions: ',
        name: 'testInstructions'
    },
];
       
for (const question in questions) {
    inquirer
        .prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, generateMarkdown(data), (err) => {
        (err) ? console.log(err) : console.log('Success!')
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
