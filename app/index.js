// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs');
// CLASSES
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// QUESTION ARRAYS
const employeeRole = require("./src/employeeRoleQuestions");
const internQuestions = require("./src/internQuestions");
const managerQuestions = require("./src/managerQuestions");
const engineerQuestions = require("./src/engineerQuestions");
// HTML
const generateHTMLHead = require('./src/HTMLheader')
const generateHTMLFooter = require('./src/HTMLfooter')

// INITIALISE
const init = () => {
    inquirer.prompt(employeeRole)
        .then((response) => {
            if (response.empRole === 'Manager') {
                return fs.writeFileSync("./dist/Team-Profile.html", generateHTMLHead, (err) =>
                    err ? console.error(err) : console.log('Team Profile successfully initiated.')), managerPrompt()
            } else if (response.empRole === 'Engineer') {
                return fs.writeFileSync("./dist/Team-Profile.html", generateHTMLHead, (err) =>
                    err ? console.error(err) : console.log('Team Profile successfully initiated.')), engineerPromt()
            } else if (response.empRole === 'Intern') {
                return fs.writeFileSync("./dist/Team-Profile.html", generateHTMLHead, (err) =>
                    err ? console.error(err) : console.log('Team Profile successfully initiated.')), internPrompt()
            } else false
        })
};

// PROMPTS
managerPrompt = () => {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            fs.appendFileSync('./dist/Team-Profile.html', managerCard(response));
            if (response.managerAdd === "Manager")
                return managerPrompt();
            else if (response.managerAdd === "Engineer") {
                return engineerPrompt();
            } else if (response.managerAdd === "Intern") {
                return internPrompt();
            } else fs.appendFileSync('./dist/Team-Profile.html', generateHTMLFooter);
            return console.log("Finished instance of Profile generated");
        });
}

engineerPrompt = () => {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            fs.appendFileSync('./dist/Team-Profile.html', engineerCard(response));
            if (response.engineerAdd === "Manager")
                return managerPrompt();
            else if (response.engineerAdd === "Engineer") {
                return engineerPrompt();
            } else if (response.engineerAdd === "Intern") {
                return internPrompt();
            } else fs.appendFileSync('./dist/Team-Profile.html', generateHTMLFooter);
            return console.log("Finished instance of Profile generated");
        });
}

internPrompt = () => {
    inquirer.prompt(internQuestions)
        .then((response) => {
            fs.appendFileSync('./dist/Team-Profile.html', internCard(response));
            if (response.internAdd === "Manager")
                return managerPrompt();
            else if (response.internAdd === "Engineer") {
                return engineerPrompt();
            } else if (response.internAdd === "Intern") {
                return internPrompt();
            } else fs.appendFileSync('./dist/Team-Profile.html', generateHTMLFooter);
            return console.log("Finished instance of Profile generated");
        });
}

// HTML CONTAINING DATA EXTRAPOLATED FROM PROMPTS
function managerCard(response) {
    let mng = new Manager(response.managerName, response.managerID, response.managerEmail, response.officeNumber);
    return `
    <div class="card col-4 bg-light">
        <div class="card-header text-white bg-primary">
            <h4>${mng.name}</h4>
            <h5 class="card-title text-white"><i class="fas fa-mug-hot"></i></h5>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${mng.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${mng.email}">${mng.email}</a></li>
                <li class="list-group-item">Office Number: <a href="${mng.officeNumber}">${mng.officeNumber}</a></li>
            </ul>
        </div>
</div>`
}

function engineerCard(response) {
    let eng = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.github);
    return `
    <div class="card col-4 bg-light">
        <div class="card-header text-white bg-primary">
            <h4>${eng.name}</h4>
            <h5 class="card-title text-white"><i class="fas fa-glasses"></i></h5>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${eng.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${eng.email}">${eng.email}</a></li>
                <li class="list-group-item">GitHub:
                    <a href="https://github.com/${eng.github}" target="_blank">${eng.github}</a>
                </li>
            </ul>
        </div>
</div>`
}

function internCard(response) {
    let int = new Intern(response.internName, response.internID, response.internEmail, response.school);
    return `
    <div class="card col-4 bg-light">
        <div class="card-header text-white bg-primary">
            <h4>${int.name}</h4>
            <h5 class="card-title text-white"><i class="fas fa-user-graduate"></i></h5>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${int.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${int.email}">${int.email}</a></li>
                <li class="list-group-item">School: <a href="${int.school}"> ${int.school}</a></li>
            </ul>
        </div>
</div>`
}

init();