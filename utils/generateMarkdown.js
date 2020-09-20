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

module.exports = { generateMarkdown };
