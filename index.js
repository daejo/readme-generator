// const { generateMarkdown } = require('./utils/generate-Markdown.js');
const inquirer = require("inquirer"); //declaring inquirer is needed for app to work.

/* QUESTIONS ARRAY */
const questions = () => {
    /*PROMPTS QUESTION SEQUENCE*/
    return inquirer.prompt([
        {
         type: "input", //declaring what type of answer. in this case an input response is required.
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
         type: "input",
         name: "description",
         message: "Add a description of your project. (Required)",
         validate: descInput => {
           if (descInput) {
             return true;
           } else {
             console.log("Please describe your project details!");
             return false;
           }
         }
       },
       {
           type: "confirm", //declaring what type of answer. in this just a confirmation response is required.
           name: "confirmToC", //declaring call label for table of contents response.
           message: 'Does your ReadMe need a "Table of Contents"?',
           default: true //proceeds with true value.
       },
       {
           type: "input",
           name: "toc",
           message: "Please add your table of contents with proper markdown.",
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
