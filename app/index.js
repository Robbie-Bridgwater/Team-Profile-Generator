const inquirer = require('inquirer');
const fs = require('fs');

const employeePrompts = () => {
    return inquirer
        .prompt([{
            type: 'list',
            name: 'empRole',
            message: "What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        }, {
            type: 'input',
            name: 'empName',
            message: "What is the employee's name?",
        }, {
            type: 'input',
            name: 'empID',
            message: "What is the employee's ID number?",
        }, {
            type: 'input',
            name: 'empEmail',
            message: "What is the employee's email?",
        }, ])
}

employeePrompts();