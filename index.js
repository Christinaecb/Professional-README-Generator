// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
// An array of questions for the user to answer
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'table of contents',
      message: 'Provide table of contents for your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPL', 'Apache', 'Unlicensed'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide guidelines for contributing to your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide instructions for running tests for your project:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];

// TODO: Create a function to write README file
// writeToFile function takes in a file name and data and uses Node.js 'fs' module to write data to the specified file
// If there's an error it should be logged to the console
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! Your README.md file has been generated!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();