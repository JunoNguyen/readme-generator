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
        message: 'Explain why you created this code.',
        name: 'uses',
    },
    {
        type: 'input',
        message: 'Enter a Description of your Project',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Explain how to use and install your code.',
        name: 'explain',
    },
    {
        type: 'checkbox',
        message: 'What Languages did you use?',
        name: 'lang',
        choices: ['HTML', 'CSS', 'Javscript'],
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Link your Github Repository',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'Enter your Email.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Explain how to reach you if a user has questions.',
        name: 'contact',
    }
];

const inputInfo = inquirer 
    .prompt(questions)
    .then((response) => {
        console.log(response);
        var README = generatedREADME(response);
        console.log(README)
        fs.writeFile('generatedREADME.md', README, (err) => {
            err ? console.log(err) : console.log('README.md Written!')
        })
    })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// fs.writeFile('generatedREADME.md', generateREADME)
const generatedREADME = function(response){
    return `# ${response.title}\n
Table of Contents
=================
    [Description](#description)
    [Usage](#usage)
    [Built With](#built-with)
    [Questions](#questions)

    ${response.uses}
## Description
    ${response.desc}
## Usage
    ${response.explain}
## Built With
    ${response.lang}
## Questions
    ${response.username}
    ${response.repo}
    ${response.email}
    ${response.contact}`
};

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
