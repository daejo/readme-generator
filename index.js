// const { generateMarkdown } = require('./utils/generate-Markdown.js');
const inquirer = require("inquirer");

// array of questions for user
const questions = () => {
    
    return inquirer.prompt([
        {
         type: 'input',
         name: 'name',
         message: 'What is your name? (Required)',
         validate: nameInput => {
           if (nameInput) {
             return true;
           } else {
             console.log('Please enter your name!');
             return false;
           }
         }
       },
       {
         type: 'input',
         name: 'github',
         message: 'Enter your GitHub Username (Required)',
         validate: gitUserInput => {
           if (gitUserInput) {
             return true;
           } else {
             console.log('Please enter your github username!');
             return false;
           }
         }
       },
       {
           type: 'confirm',
           name: 'confirmAbout',
           message: 'Would you like to enter some information about yourself for an "About" section?',
           default: true
       },
       {
           type: 'input',
           name: 'about',
           message: 'Provide some information about yourself:',
           when: ({ confirmAbout }) => confirmAbout
       }
     ]);
};


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
