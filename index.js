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
  {
    type: "list",
    message: "What type of license does your application have?",
    name: "license",
    choices: ["MIT", "Apache", "GPL", "MNA", "BSD", "None"],
  },
  {
    type: "input",
    message: "What is your application about?",
    name: "description",
  },
  {
    type: "input",
    message:
      "What installation instructions would you give for your application?",
    name: "installation",
  },
  {
    type: "input",
    message: "What usage instructions would you give for your application?",
    name: "applicationUsage",
  },
  {
    type: "input",
    message:
      "What contribution instructions would you give for your application?",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "What other testing information can you give for your application? ",
    name: "testApplication",
  },
  {
    type: "input",
    message: "What is your Github profile URL?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = async () => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
  const markdown = generateMarkdown(answers);
  console.log(markdown);
  writeToFile("GENERATED_README", markdown);
};
// Function call to initialize app
init();
