// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title for your application?",
    name: "titleName",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = async () => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
  const markdown = generateMarkdown(answers);
};
// Function call to initialize app
init();
console.log("js");
