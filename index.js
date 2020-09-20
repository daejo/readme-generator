const inquirer = require("inquirer"); //declaring inquirer is needed for app to work.
const { generateMarkdown, writeToFile } = require("./utils/generateMarkdown.js"); //declaring generateMarkdown function from utils folder is needed for app to work.

/* QUESTIONS ARRAY */
const questions = readMeData => {
    // If there's no 'projects' array property, create one
    if (!readMeData) {
        readMeData = [];
    }
    console.log(`
  ===================
  Create a New ReadMe
  ===================
  `);
    /*PROMPTS QUESTION SEQUENCE*/
    return inquirer.prompt([
        {
         type: "input", //declaring what type of answer. in this case an input response is required.
         name: "title", //declaring call label for specific answer.
         message: "What is the title of your project? (Required)", //question to be displayed.
         validate: titleInput => { //checking if response is acceptable.
           if (titleInput) { //if true proceed.
             return true; 
           } else { //if false, message is displayed and until valid response is entered.
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
            type: "input",
            name: "install",
            message: "Add the steps of installation for your project. (Required)",
            validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("Please provide an installation guide!");
                return false;
            }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Add instructions and examples of use of your project. (Required)",
            validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please provide instructions of usage!");
                return false;
            }
            }
        },
        {
            type: "checkbox",
            name: "license",
            message: "Please choose the license/s that applies. (Please choose one)",
            choices: ["MIT", "GNU.AGPLv3", "GNU.GPLv3", "GNU.LGPLv3", "Mozilla.Public2.0", "Apache2.0", "Boost.Software1.0", "Unlicense"]
        },
        {
            type: "input",
            name: "contribute",
            message: "Set the guidelines on how other developers can contribute. (Required)",
            validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log("Please provide instructions for contributing!");
                return false;
            }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Document of tests and provide an example how to run them. (Required)",
            validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please document tests!");
                return false;
            }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter your Github profile link. (Required)",
            validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your github profile link!");
                return false;
            }
            }
        },
        {
            type: "input",
            name: "user",
            message: "Enter your Github username. (Required)",
            validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter your github username!");
                return false;
            }
            }
        }       
    ]);
};

// INITIALIZES THE PROGRAM
questions()
.then(readMeData => {
    return generateMarkdown(readMeData);
})
.then(readMeData => {
    return writeToFile(readMeData);
})
.then(writeToFileResponse => {
    console.log(writeToFileResponse);
})
    .catch(err => {
    console.log(err);
});
