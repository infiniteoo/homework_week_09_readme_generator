const answers = require('./index');

const readme = `
# ${answers.projectTitle}
${answers.licenseBadge}

## DESCRIPTION
${answers.descriptionEntered}

## INSTALLATION
${answers.installationEntered}

## USAGE
${answers.usageEntered}

## CONTRIBUTING
${answers.contributingEntered}

## TESTS
$answers.{testsEntered}

## QUESTIONS
### https://github.com/${answers.githubUsername}
#### EMAIL ADDRESS: ${answers.emailEntered}
## LICENSE
${answers.licenseEntered}

`

module.exports = readme;