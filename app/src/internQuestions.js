const internQuestions = [{
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the intern's name.")
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is the interns's ID number?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the intern's ID number.")
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the interns's email?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the intern's email.")
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'school',
        message: "Where does the intern go to school?",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("You must enter the intern's school.")
            }
            return true;
        },
    },
    {
        type: "list",
        name: "internAdd",
        message: "Do you want to add another team member?",
        choices: ['Manager', 'Engineer', 'Intern', 'I do not wish to add someone else']
    }
];

module.exports = internQuestions;