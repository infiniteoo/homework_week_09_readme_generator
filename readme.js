// grab the answers from the inquirer object in index.js
const answers = require('./index');

// grab the license map
const licenseMap = require('./licenses');

// assign the license badge URL to a string to place in the file file
let licenseBadgeLink = licenseMap.get(answers.licenseEntered);

// template literal string to customize with variable inserts
const readme = 
`
# ${answers.projectTitle}
${licenseBadgeLink}
#
## TABLE OF CONTENTS
* [Description](##DESCRIPTION)
* [Installation](##INSTALLATION)
* [Usage Instructions](##USAGE)
* [Contributing Shoutouts](##CONTRIBUTING)
* [Test Instructions](##TESTS)
* [Questions | Contact](##QUESTIONS)
* [License Information](##LICENSE)
* [Installation](#installation)

## DESCRIPTION
${answers.descriptionEntered}

## INSTALLATION
${answers.installationEntered}

## USAGE
${answers.usageEntered}

## CONTRIBUTING
${answers.contributingEntered}

## TESTS
${answers.testsEntered}

## QUESTIONS
### https://github.com/${answers.githubUsername}
#### EMAIL ADDRESS: ${answers.emailEntered}
## LICENSE
${answers.licenseEntered}
`

module.exports = readme;