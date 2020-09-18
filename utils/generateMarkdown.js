// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

          ## Description 

          ${data.description}


          ## Table of Contents
          
          * [Installation](#installation)
          * [Usage](#usage)
          * [Credits](#credits)
          * [License](#license)


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

          
          --

          ## Questions

          ${data.github}
          ${data.user}
          ${data.profile}
`;
}

module.exports = generateMarkdown;
