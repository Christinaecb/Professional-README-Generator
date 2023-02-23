// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
    err ? console.error(err) : console.log('README.md file created')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const {
        title,
        description,
        installation,
        usage,
        contributing,
        tests,
        license,
        github,
        email,
      } = answers;
  
      const readmeTemplate = `# ${title}
  
  ## Description
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}
  
  ## License
  This project is licensed under the ${license} license.
  
  ## Questions
  If you have any questions, please feel free to reach out to me on GitHub (${github}) or via email (${email}).`;
  
      writeToFile('README.md', readmeTemplate);
    });
  }

// Function call to initialize app
init();
