const inquirer = require("inquirer"); //declaring inquirer is needed for app to work.
const fs = require("fs"); //declaring fs is needed for app to work.
const { generateMarkdown } = require("./utils/generateMarkdown.js");

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
            choices: ["MIT", "GNU_AGPLv3", "GNU_GPLv3", "GNU_LGPLv3", "Mozilla_Public2.0", "Apache2.0", "Boost_Software1.0", "Unlicense"]
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

/* WRITE README FILE FUNCTION */
const writeToFile = readMeContent => {
    console.log(readMeContent)
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/ReadMe.md", readMeContent, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'ReadMe created!'
          });
        });
    });
  
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
