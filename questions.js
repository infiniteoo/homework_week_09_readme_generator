/* key/value pairs for our licenses & their badge links */
const licenseMap = require('./licenses');

// extract keys from Map for list choises
const licenseNames = [...licenseMap.keys()];

const questions = [
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
        choices: licenseNames
    },
];

module.exports = questions;