// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const license = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
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
        message: 'Link your Github',
        name: 'github',
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
    },
    {
        type: 'list',
        message: 'Choose a License',
        name: 'chosenlicense',
        choices: ['Apache', 'Boost','Creative Commons'],
    },
    {
        type: 'list',
        message: 'Do you want contributions?',
        name: 'contr',
        choices: ['I do not want contributions', 'I am open to contributions. Contact me.'],
    }
];

const inputInfo = inquirer 
    .prompt(questions)
    .then((response) => {
        console.log(response);
        var README = generatedREADME(response);
        // var licenseEl = license(response.chosenlicense);
        console.log(README);
        // console.log(licenseEl);
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
[Description](#description)\n
[Usage](#usage)\n
[Built With](#built-with)\n
[Questions](#questions)\n
[Contributions](#contributions)\n
[License](#${response.chosenlicense})\n

    ${response.uses}
## Description
    ${response.desc}
## Usage
    ${response.explain}
## Built With
    ${response.lang}
## Questions
    ${response.username}
    [Github Profile](${response.github})
    ${response.email}
    ${response.contact}
## Contributions
    ${response.contr}
${generateMarkdown(response.chosenlicense)}`
};

