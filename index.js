const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Provide a Description of your project:',
    },
    {
      type: 'checkbox',
      name: 'License',
      message: 'What license?',
      choices: ['MIT', 'APACHE', 'GPL', 'BSD', 'NONE'],
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Default installation is: npm i',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How to use your project:',
    },
    {
      type: 'input',
      name: 'Contribution',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'Test',
      message: 'Default test instructions: node index.js',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'GitHub',
      message: 'What is your GitHub username?',
    },
  ]);

const generateREADME = (answers) =>
  `# ${answers.Title} 

  ${generateLicense(answers)}

  ## Table of Contents
  - [Description](#description)
  - [What To Expect](#what-to-expect)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description:
  ${answers.Description}

  ## What To Expect:
  (Insert GIF Functionality or Image here)

  ## Installations:
  ${answers.Installation}

  ## Usage:
  ${answers.Usage}

  ## License: 
  ${answers.License}   
  ${generateLicense(answers)}

  ## Contributing:
   ${answers.Contribution} 

  ## Tests:
  ${answers.Test}

  ## Questions:
  If you have any questions email me at:${answers.Email}
  If you want to contribute to the repository you can at github.com/${answers.GitHUb}
    `

function generateLicense(answers) {

  if (answers.license == 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (answers.license == 'APACHE') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (answers.license == 'GPL') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
  } else if (answers.license == 'BSD') {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    return "NONE"
  }
}

promptUser()
  .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
  .then(() => console.log("Succesfully wrote README.md"))
  .catch((err) => console.error(err));