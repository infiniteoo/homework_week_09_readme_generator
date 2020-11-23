/*--------------------------------------
README GENERATOR v1.0
TROY DORMAN
UNiVERSiTY OF MiNNESOTA CODiNG BOOTCAMP
FALL 2020
---------------------------------------*/

/* reference to prompt generating add-on */
const inquirer = require('inquirer');

/* main string we'll be inserting custom values into */
const readme = require('./readme');

/* reference to filesystem to write readme file */
const filesystem = require('fs');



// cool intro art
console.log(require('./ascii_art_intro'));

// let's ask the user some questions

const questions = require('./questions');

inquirer
    .prompt(questions)
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










