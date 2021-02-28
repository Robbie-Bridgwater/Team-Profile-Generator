const fs = require('fs');

const writeFile = fileContent => {
    return fs.writeFileSync("./dist/Team-Profile.html", fileContent, (err) =>
        err ? console.error(err) : console.log('The File was successfully written.'));
}

module.exports = writeFile