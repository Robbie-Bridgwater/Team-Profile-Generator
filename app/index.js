const inquirer = require('inquirer');
const fs = require('fs');

const employeeRole = {
    type: 'list',
    name: 'empRole',
    message: "What is the employee's role?",
    choices: ['Manager', 'Engineer', 'Intern']
}

const addOther = {
    type: "list",
    name: "addOthers",
    message: "Do you want to add another team member?",
    choices: ['Add a Manager', 'Add an Enginer', 'Add an Intern', 'I do not want to add anyone else']
};

const managerPrompts = [{
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the manager's ID number?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office phone number?"
    },
    addOther
];

const engineerPrompts = [{
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is the engineer's ID number?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
    },
    addOther
];

const internPrompts = [{
        type: 'input',
        name: 'managerName',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the interns's ID number?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the interns's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "Where does the intern go to school?"
    },
    addOther
];

const init = () => {
    inquirer.prompt(employeeRole)
        .then((response) => {
            if (response.empRole === 'Manager') {
                return inquirer.prompt(managerPrompts)
            } else if (response.empRole === 'Engineer') {
                return inquirer.prompt(engineerPrompts)
            } else if (response.empRole === 'Intern') {
                return inquirer.prompt(internPrompts)
            }
        })
};

init();