// const { generateMarkdown } = require('./utils/generate-Markdown.js');
const inquirer = require("inquirer"); //declaring inquirer is needed for app to work.
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

/* QUESTIONS ARRAY */
const questions = () => {
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
            message: "Please choose the license/s that applies. (Check all that apply)",
            choices: ["MIT License", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense"]
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
        },
        {
            type: "input",
            name: "profile",
            message: "Enter your Github profile link. (Required)",
            validate: profileInput => {
            if (profileInput) {
                return true;
            } else {
                console.log("Please enter your github profile link!");
                return false;
            }
            }
        }
       
     ]);
};

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/ReadMe.md", fileContent, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
    });

}

// // function to initialize program
// function init() {
// generateMarkdown();    
questions();
// }

// // function call to initialize program
// init();
