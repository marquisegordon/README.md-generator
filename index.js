// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create a function to write README file
const generateREADME = ({ gitHub, email, title, description, license, install, test, repoUse, contributing }) =>
`# ${title}
![GitHub license](https://img.shields.io/badge/license-${license}-red)

## Description

${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${install}

## Usage

${repoUse}

## License

This project is licensed under the ${license} license.

## Contribute

${contributing}.

## Tests

${test}.

## Questions

If you have any further questions or comments please contact me at ${email}. You can also find more of my work on my GitHub pages [${gitHub}](https://github.com/${gitHub})`;


// TODO: Create an array of questions for user input
inquirer.prompt([
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?'
        },
        {
            type: 'input',
            name: 'repoUse',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: [
                "MIT",
                "APACHE 2.0",
                "GPL 3.0",
                "BSD 3",
                "NONE"
            ]
        }
    ])
    // TODO: Create a function to initialize app
    .then((answers) => {
        const readmeContent = generateREADME(answers);
        
        fs.writeFile('README.md', readmeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
