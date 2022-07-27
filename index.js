// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template");

// TODO: Create an array of questions for user input
const promptUser = () => {
return inquirer.prompt( [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project? (Required)",
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log("Please enter a title for your project.")
                return false;
            }
        }
    },
    {
    
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please provide a description of your project including your motivation, the problem you solved and what you learned.")
                return false;
            }
            }
    },
    {
        type: "input",
        name: "installation",
        message: "What are the required steps to install your project? Provide a step-by-step explanation of how to get the development environment running." 
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["None", "MIT", "Apache License 2.0", "GNU General Public License v3.0"],
        validate: licenseList => {
            if (licenseList === "MIT") {
                licenseBadge = ![GitHub]("https://img.shields.io/github/MIT/OliviaRamsfield/node-readme-generator?style=social")
                return licenseBadge
            } if (licenseList === "Apache License 2.0") {
                licenseBadge = "![GitHub](https://img.shields.io/github/Apache2/OliviaRamsfield/node-readme-generator?style=social)"
            } if (licenseList === "GNU General Public License v3.0") {
                licenseBadge = "![GitHub](https://img.shields.io/github/GPL/OliviaRamsfield/node-readme-generator?style=social)"
            } else (licenseList === "None")
                return ""
                console.log(licenseList)
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide guidelines for contributing to this project."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide instructions and examples for how to run tests on this project."
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username? (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please provide your GitHub username.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
]).then(userReadmeData => {
    return userReadmeData
})
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(`./dist/${fileName}`, data, err => {
//         if (err) {
//             console.log(err)
//         } console.log("Readme created!")
// })
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileContent, err => {
            //if theres an error, reject the promise and send the error to the Promise's catch() method
            if (err) {
                reject(err)
                //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function
                return
            }

            //if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: "File created!"
            })
        })
    })
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

promptUser()
    .then(userReadmeData => {
        return generatePage.generateReadme(userReadmeData)
    })
    .then(pageMD => {
        return writeFile(pageMD)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse)
    })
    .catch (err => {
        console.log(err)
    })
