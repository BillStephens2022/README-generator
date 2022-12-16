// require all modules (inquirer and fs) and function imported from generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');


// Array of questions to be presented to user in the terminal.  Answers to questions will ultimately be used as text in the README file.
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
        choices: ['MIT License', 'GPL License', 'BSD License', 'ISC License', 'Apache License', 'not listed/none'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'githubUserName',
    },
    {
        type: 'input',
        message: 'enter your email address: ',
        name: 'userEmail',
    },
];
       
// function to write data to a README.md file in the 'output' folder.

function writeToFile(answers) {
    fs.writeFile("./output/README.md", answers, (err) => {
        (err) ? console.log(err) : console.log('README.md generated! Check the output folder.')
    });
}

/* function to initialize app.  Prompts users with all questions from the questions array. Once questions are answered
the answers are used to generate the markdown text which is written to the README.md file via calling the writeToFile function. */
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
