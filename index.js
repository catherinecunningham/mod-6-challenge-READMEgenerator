// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        // need type, message, and name
        type: "input", 
        message: "What is the title of your project?",
        name: "title"
    },
    // description, installation instructions, usage information, contribution guidelines, and test instructions
    {
        type: "list",
        message: "",
        name: "",
        choices: ["", ""]
    }
]).then(ans => {
    console.log(ans.title)
    
    fs.writeFileSync("README.md", `
# ${ans.title}

# Table of Contents
[Text to display](#Description)

# Description
    
## stuff goes here HAMMERS

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
