const inquirer = require('inquirer');
const fs = require('fs');

const employeesRole = {
    type: 'list',
    name: 'empRole',
    message: "What is the employee's role?",
    choices: ['Manager', 'Engineer', 'Intern']
}

const addAnother = {
    type: 'list',
    name: 'empRole',
    message: "Do you wish to add another team ",
    choices: ['Manager', 'Engineer', 'Intern']
}

const managerQuestions = [{
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?",
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
    {
        type: "list",
        name: "managerAdd",
        message: "Do you want to add another team member?",
        choices: ['Manager', 'Engineer', 'Intern', 'I do not wish to add someone else']
    }
];

const engineerQuestions = [{
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
    {
        type: "list",
        name: "engineerAdd",
        message: "Do you want to add another team member?",
        choices: ['Manager', 'Engineer', 'Intern', 'I do not wish to add someone else']
    }
];

const internQuestions = [{
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
            }
        })
};

managerPrompt = () => {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            if (response.managerAdd === "Manager")
                return managerPrompt();
            else if (response.managerAdd === "Engineer") {
                return engineerPrompt();
            } else if (response.managerAdd === "Intern") {
                return internPrompt();
            } else {
                return false;
            }
        });
}

engineerPrompt = () => {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            if (response.engineerAdd === "Manager")
                return managerPrompt();
            else if (response.engineerAdd === "Engineer") {
                return engineerPrompt();
            } else if (response.engineerAdd === "Intern") {
                return internPrompt();
            } else {
                return false;
            }
        });
}

internPrompt = () => {
    inquirer.prompt(internQuestions)
        .then((response) => {
            if (response.internAdd === "Manager")
                return managerPrompt();
            else if (response.internAdd === "Engineer") {
                return engineerPrompt();
            } else if (response.internAdd === "Intern") {
                return internPrompt();
            } else {
                return false;
            }
        });
}

init();