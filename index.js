/* -------------------------------------------

README GENERATOR v1.0
TROY DORMAN
UNiVERSiTY OF MiNNESOTA CODiNG BOOTCAMP
FALL 2020
--------------------------------------------*/


/* reference to prompt generating add-on */
const inquirer = require('inquirer');

/* key/value pairs for our licenses & their badge links */
const licenseMap = require('./licenses');

/* main string we'll be inserting custom values into */
const readme = require('./readme');

/* reference to filesystem to write readme file */
const filesystem = require('fs');





// some sort of ascii art introduction?

// let's ask the user some questions
inquirer
    .prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Project title:"
        },
        {
            type: "input",
            name: "descriptionEntered",
            message: "Project description:"
        },
        {
            type: "input",
            name: "installationEntered",
            message: "Installation instructions:"
        },
        {
            type: "input",
            name: "usageEntered",
            message: "Usage instructions:"
        },
        {
            type: "input",
            name: "contributingEntered",
            message: "Contributing guidelines:"
        },
        {
            type: "input",
            name: "testsEntered",
            message: "test instructions:"
        },
        {
            type: "input",
            name: "githubUsername",
            message: "Github username:"
        },
        {
            type: "input",
            name: "emailEntered",
            message: "email address:"
        },
        {
            type: "list",
            name: "licenseEntered",
            message: "pick a license:",
            choices: [
                "1", "2", "3"
            ]
        },
    ])
    .then(answers => {
        console.log(answers);
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });










