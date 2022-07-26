// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
        choices: ["None", "MIT", "Apache License 2.0", "GNU General Public License v3.0"]
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
])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
