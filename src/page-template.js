

const generateReadme = readmeText => {
    //destructuring object
    const {projectTitle, description, installation, usage, license, contributing, tests, github, email, licenseBadge } = readmeText
    if(!readmeText) {
        return ""
    } else {
        return `
        # ${projectTitle}

        ## Table of Contents
        * [Description](#description)
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)
        
        ## Description
        ${description}
        ## Installation
        ${installation}
        ## Usage
        ${usage}
        ## License
        ${license}
        ![badge](https://img.shields.io/badge/license-${license}-brightgreen.svg)
        ## Contributing
        ${contributing}
        ## Tests
        ${tests}
        ## Questions
        [${github}](https://github.com/${github})
        If you have additional questions please reach out at: ${email}
    `}
}

module.exports.generateReadme = generateReadme;