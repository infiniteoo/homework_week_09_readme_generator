const answers = require('./index');
const licenseMap = require('./licenses');

let licenseBadgeLink = licenseMap.get(answers.licenseEntered);

const readme = 
`
# ${answers.projectTitle}
${licenseBadgeLink}

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