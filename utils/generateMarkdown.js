// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  return `
  # ${answers.titleName}

  ${
    answers.license !== "None"
      ? `![${answers.license} license](https://img.shields.io/badge/license-${answers.license}-green)`
      : ""
  }
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description

  ${answers.description}
  
  ## Installation
  \`\`\`
  ${answers.installation}
  \`\`\`   
  ## Usage

  ${answers.applicationUsage}

  ## License

  ${answers.license}
  
  ## Contributing

  ${answers.contributing}
  
  ## Tests

  ${answers.testApplication}
  
  ## Questions
  
  - View my [GitHub](https://github.com/${answers.github}) profile
  - Email me at ${answers.email} 
`;
};

module.exports = generateMarkdown;
