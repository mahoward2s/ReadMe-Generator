const inquirer = require('inquirer');
const fs = require('fs');
​
inquirer
  .prompt([
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
      type: 'list',
      name: 'License',
      message: 'Choose the license for your project:',
      choise: [MIT, APACHE 2.0, GPL 3.0, BSD 3, NONE],
    },
    {
      type: 'input',
      name: 'Installation Instructions',
      message: 'default npm i',
    },
    {
      type: 'input',
      name: 'Usage Information',
      message: '',
    },
    {
      type: 'input',
      name: 'Contribution Guidelines',
      message: '',
    },
    {
      type: 'input',
      name: 'Test Instructions',
      message: '',
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
  ])
  .then((answers) => {
​
    console.log(answers)

    readMe = (`# ${answers.Title}  
    
    ## Installations:
    

      
    ## Description:
    
    ${answers.Description}
    
    ## Usage:


    ## Contributing:
    
    

    ## License: 
    
    ${answers.License}    
    
    ## Tests:
    
    
    
    ## Questions:
    If you have any questions email me at:${answers.Email}
    If you want to contribute to the repository you can at github.com/${answers.GitHUb}
    `)
​
    fs.writeFile('README.md', readMe, function(err){
        if (err) throw err;
        console.log('Saved!');
    })
​
  });