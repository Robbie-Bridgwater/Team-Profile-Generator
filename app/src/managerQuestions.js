const managerQuestions = [{
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the manager's name.")
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the manager's ID number?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the manager's ID number.")
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the manager's email.")
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office phone number?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the manager's office number.")
            }
            return true;
        },
    },
    {
        type: "list",
        name: "managerAdd",
        message: "Do you want to add another team member?",
        choices: ['Manager', 'Engineer', 'Intern', 'I do not wish to add someone else']
    }
];

module.exports = managerQuestions;