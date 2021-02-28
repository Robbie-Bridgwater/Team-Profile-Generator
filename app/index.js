const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = require('./src/writeFile')
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const managers = [];
const engineers = [];
const interns = [];
const allEmployees = { managers, engineers, interns }

const managerPush = (response) => {
    managers.push(new Manager(response.name, response.ID, response.email, response.officeNumber))
};

const internPush = (response) => {
    interns.push(new Intern(response.name, response.ID, response.email, response.school))
}

const engineerPush = (response) => {
    engineers.push(new Engineer(response.name, response.ID, response.email, response.github))
}

const employeesRole = {
    type: 'list',
    name: 'empRole',
    message: "What is the employee's role?",
    choices: ['Manager', 'Engineer', 'Intern']
}

const managerQuestions = [{
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is the manager's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office phone number?"
    },
    {
        type: "list",
        name: "managerAdd",
        message: "Do you want to add another team member?",
        choices: ['Manager', 'Engineer', 'Intern', 'I do not wish to add someone else']
    }
];

const engineerQuestions = [{
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is the engineer's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
    },
    {
        type: "list",
        name: "engineerAdd",
        message: "Do you want to add another team member?",
        choices: ['Manager', 'Engineer', 'Intern', 'I do not wish to add someone else']
    }
];

const internQuestions = [{
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is the interns's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the interns's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "Where does the intern go to school?"
    },
    {
        type: "list",
        name: "internAdd",
        message: "Do you want to add another team member?",
        choices: ['Manager', 'Engineer', 'Intern', 'I do not wish to add someone else']
    }
];

const init = () => {
    inquirer.prompt(employeesRole)
        .then((response) => {
            if (response.empRole === 'Manager') {
                return managerPrompt();
            } else if (response.empRole === 'Engineer') {
                return inquirer.prompt(engineerQuestions)
            } else if (response.empRole === 'Intern') {
                return inquirer.prompt(internQuestions)
            } else false
        })
};

managerPrompt = () => {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            managerPush(response);
            if (response.managerAdd === "Manager")
                return managerPrompt();
            else if (response.managerAdd === "Engineer") {
                return engineerPrompt();
            } else if (response.managerAdd === "Intern") {
                return internPrompt();
            } else generateHTML(allEmployees)
        });
}

engineerPrompt = () => {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            engineerPush(response);
            if (response.engineerAdd === "Manager")
                return managerPrompt();
            else if (response.engineerAdd === "Engineer") {
                return engineerPrompt();
            } else if (response.engineerAdd === "Intern") {
                return internPrompt();
            } else generateHTML(allEmployees)
        });
}

internPrompt = () => {
    inquirer.prompt(internQuestions)
        .then((response) => {
            internPush(response);
            if (response.internAdd === "Manager")
                return managerPrompt();
            else if (response.internAdd === "Engineer") {
                return engineerPrompt();
            } else if (response.internAdd === "Intern") {
                return internPrompt();
            } else console.log(allEmployees)
        });
}

init()