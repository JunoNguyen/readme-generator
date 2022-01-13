// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your Project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a Description of your Project',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Explain how to use your code.',
        name: 'explain',
    }
];

const inputInfo = inquirer 
    .prompt(questions)
    .then((response) => {
        console.log(response);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
