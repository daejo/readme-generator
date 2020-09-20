// function to generate markdown for README
const generateMarkdown = (data) => {
  if (!data) {
    return '';
  }
  let gitLink = data.title;
  let newTitle = (gitLink).replace(" ", "-");

  return `# ${data.title}
  ![Top Language](https://img.shields.io/github/languages/top/${data.user}/${newTitle})
  ![GitHub Language count](https://img.shields.io/github/languages/count/${data.user}/${newTitle})
  ![License](https://img.shields.io/badge/license-${data.license}-green.svg)

  ## Description 

  _${data.description}_
 
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation

  _${data.install}_


  ## Usage 

  _${data.usage}_ 


  ## Credits

  _${data.credits}_


  ## Contributing

  _${data.contribute}_


  ## Tests

  _${data.tests}_

  ---
  ## Questions?
  _Contact me:_
  _[@${data.user}](github.com/${data.user})_  
  _[${data.github}](${data.github})_  
  
`;
}

module.exports = { generateMarkdown };
