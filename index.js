// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    //title
    {
        // need type, message, and name
        type: "input", 
        message: "What is the title of your project?",
        name: "title"
    },
    //description
    {
        type: "input",
        message: "Write a description for your project.",
        name: "description"
    },
    //installation
    {
        type: "input",
        message: "Write installation instructions for your project.",
        name: "installation"
    },
    //usage
    {
        type: "input",
        message: "Write any usage information you have for your project.",
        name: "usage"
    },
    //contribution
    {
        type: "input",
        message: "Describe how people can contribute to your project.",
        name: "contribution"
    },
    //tests
    {
        type: "input",
        message: "Describe any tests needed for your project.",
        name: "tests"
    },
    //licenses
    {
        //license options in array
        type: "list",
        message: "Select a license your project will use.",
        name: "license",
        choices: ["Apache 2.0", "MIT", "The Unlicense", "no license"]
    }
]).then(ans => {
    console.log(ans.title)
    
    fs.writeFileSync("README.md", `
# ${ans.title}

# Table of Contents
[Description](#Description)  [Installation](#Installation)  [Usage](#Usage) [Contribution](#Contribution) [Tests](#Tests) [License](#License)

# Description 
${ans.description}
    
# Installation
${ans.installation}

# Usage
${ans.usage}

# Contribution
${ans.contribution}

# Tests
${ans.tests}

# License

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

    
    `)
})

// licenses: apache, MIT, the unlicense, no license
// 



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
