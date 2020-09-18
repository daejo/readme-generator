// const { generateMarkdown } = require('./utils/generate-Markdown.js');
const inquirer = require("inquirer"); //declaring inquirer is needed for app to work.

/* QUESTIONS ARRAY */
const questions = () => {
    /*PROMPTS QUESTION SEQUENCE*/
    return inquirer.prompt([
        {
         type: "input", //declaring what type of answer.
         name: "title", //declaring call label for specific answer.
         message: "What is the title of your project? (Required)", //question to be displayed.
         validate: titleInput => { //checking if response is acceptable.
           if (titleInput) {
             return true;
           } else {
             console.log("Please enter a project title!"); //displayes when response is unacceptable.
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

questions();

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
