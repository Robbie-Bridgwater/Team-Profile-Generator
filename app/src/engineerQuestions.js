const engineerQuestions = [{
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the engineer's name.")
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is the engineer's ID number?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the engineer's ID number.")
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the engineer's email.")
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the engineer's GitHub username.")
            }
            return true;
        },
    },
    {
        type: "list",
        name: "engineerAdd",
        message: "Do you want to add another team member?",
        choices: ['Manager', 'Engineer', 'Intern', 'I do not wish to add someone else']
    }
];

module.exports = engineerQuestions;