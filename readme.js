let projectTitle, licenseBadge, descriptionEntered, installationEntered, usageEntered,
contributingEntered, testsEntered, githubUsername, emailEntered, licenseEntered = "";

const readme = `
# ${projectTitle}
${licenseBadge}

## DESCRIPTION
${descriptionEntered}

## INSTALLATION
${installationEntered}

## USAGE
${usageEntered}

## CONTRIBUTING
${contributingEntered}

## TESTS
${testsEntered}

## QUESTIONS
### https://github.com/${githubUsername}
#### EMAIL ADDRESS: ${emailEntered}
## LICENSE
${licenseEntered}

`

module.exports = readme;