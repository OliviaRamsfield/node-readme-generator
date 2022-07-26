

const generateReadme = readmeText => {
    //destructuring object
    const {projectTitle, description, installation, usage, license, contributing, tests, github, email } = readmeText
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
        ## Contributing
        ${contributing}
        ## Tests
        ${tests}
        ## Questions
        ${github}
        If you have additional questions please reach out at: ${email}
    `}
}

module.exports.generateReadme = generateReadme;