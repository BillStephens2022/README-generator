// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');


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
    {
        type: 'list',
        message: 'Choose a license for your project: ',
        choices: ['MIT License', 'GPL License', 'BSD License', 'ISC License', 'Apache License'],
        name: 'license',
    },
];
       
// TODO: Create a function to write README file

function writeToFile(fileName) {
    fs.writeFile("README.md", fileName, (err) => {
        (err) ? console.log(err) : console.log('Success!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            writeToFile(generateMarkdown(data));
        });
}

// Function call to initialize app
init();
