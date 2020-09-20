const fs = require("fs"); //declaring fs is needed for app to work.

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

// function to generate markdown for README
const generateMarkdown = 
function generateMarkdown(data) {
  if (!data) {
    return '';
  }

  return `# ${data.title}
  ![Top Language](https://img.shields.io/github/languages/top/${data.user}/${data.title})
  ![GitHub Language count](https://img.shields.io/github/languages/count/${data.user}/${data.title})
  ![License](https://img.shields.io/badge/license-${data.license}-green.svg)

  ## Description 

  ${data.description}
 
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.install}


  ## Usage 

  ${data.usage} 


  ## Credits

  ${data.credits}


  ## Contributing

  ${data.contribute}


  ## Tests

  ${data.tests}


  ---

  ## Questions
  Contact me through:  
  [${data.github}](${data.github})  
  [@${data.user}](${data.github})
`;
}

module.exports = { generateMarkdown, writeToFile };
