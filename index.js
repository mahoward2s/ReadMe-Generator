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
      message: '',
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
    
    html = (`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Added a link to Bootstrap-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>Document</title>
    </head>
        <body>
            <h1 class="text-center">Name: ${answers.name}</h1>
            <p class="text-center">Location: ${answers.location}</p>
            <p class="text-center">Bio: ${answers.bio}</p>
            <p class="text-center">LinkedIn: ${answers.LinkedIn}</p>
            <p class="text-center">GitHub: ${answers.GitHub}</p>
        </body>
    </html>`)

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
    fs.writeFile('index.html', html, function(err){
        if (err) throw err;
        console.log('Saved!');
    })
​
  });