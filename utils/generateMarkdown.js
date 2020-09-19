// function to generate markdown for README
function generateMarkdown(data) {
  if (!data) {
    return '';
  }

  return `# ${data.title}
  ![Top Language](https://img.shields.io/github/languages/top/${data.github}/${data.title})
  ![GitHub language count](https://img.shields.io/github/languages/count/${data.github}/${data.title})

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


          ## License

          ${data.license}


          ## Contributing

          ${data.contribute}


          ## Tests

          ${data.tests}


          ---
          
          ## Questions

          ${data.github}
          [${data.user}] (${data.github})
          ${data.profile}
`;
}

module.exports = generateMarkdown;
