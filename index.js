/*--------------------------------------
README GENERATOR v1.0
TROY DORMAN
UNiVERSiTY OF MiNNESOTA CODiNG BOOTCAMP
FALL 2020
---------------------------------------*/

/* reference to prompt generating add-on */
const inquirer = require('inquirer');

/* reference to filesystem to write readme file */
const filesystem = require('fs');

// cool intro art
console.log(require('./ascii_art_intro'));

// grab questions array from other file
const questions = require('./questions');

inquirer
    .prompt(questions)
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(`ERROR! Prompt requires that it is run in an interactive environment. 
            I have no idea how to fix it. Good luck.`);
        } else {
            console.log(`ERROR!  Something went terribly wrong.  The program halted with this
            error message: ${error}! I have no idea how to fix it, I'm just a stupid robot. Good luck.`);
        }
    })
    .then(answers => {
        module.exports = answers;
        /* main string we'll be inserting custom values into */
        const readme = require('./readme');
        console.log(readme);
        // write the text file using the answers and the readme text string
        filesystem.writeFile("README.md", readme, error => console.log(`of course there was an 
        error!  this is the error: ${error}`));
    });










