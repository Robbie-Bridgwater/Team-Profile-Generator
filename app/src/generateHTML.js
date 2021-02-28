generateHTML = teamChoice => {

    const managerHTML = teamChoice.manager.map(function(role) {
        let managerCard = `
    <div class="card bg-light>
    <div class="card-header text-white bg-primary">
    <h4>${role.name}</h4>
    <h5 class="card-title text-white"><i class="fas fa-mug-hot"></i> Manager</h5>    
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${role.name}</li>
            <li class="list-group-item">Email: <a href="mailto:${role.email}"></a></li>
            <li class="list-group-item">Office Number: <a href="${role.officeNumber}"></a></li>
          </ul>
    </div>
  </div>
    `
        return managerCard
    });

    const engineerHTML = teamChoice.engineer.map(function(job) {
        let engineerCard = `
    <div class="card bg-light>
    <div class="card-header text-white bg-primary">
    <h4>${job.name}</h4>
    <h5 class="card-title text-white"><i class="fas fa-mug-hot"></i> Manager</h5>    
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${job.ID}</li>
            <li class="list-group-item">Email: <a href="mailto:${job.email}"></a></li>
            <li class="list-group-item">GitHub: <a href="${job.gitHub}"></a></li>
          </ul>
    </div>
  </div>
    `
        return engineerCard
    });

    const internHTML = teamChoice.intern.map(function(job) {
        let internCard = `
    <div class="card bg-light>
    <div class="card-header text-white bg-primary">
    <h4>${job.name}</h4>
    <h5 class="card-title text-white"><i class="fas fa-mug-hot"></i> Manager</h5>    
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${job.name}</li>
            <li class="list-group-item">Email: <a href="mailto:${job.email}"></a></li>
            <li class="list-group-item">School: <a href="${job.school}"></a></li>
          </ul>
    </div>
  </div>
    `
        return internCard
    });
    return [managerHTML, engineerHTML, internHTML]
}

module.exports = HTMLData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <title>Team Profile</title>
    </head>
    
    <body>
        <header style="text-align:center" class="jumbotron bg-danger text-white">
            <h1>My Team</h1>
        </header>
        <article class="container">
            ${generateHTML(HTMLData)}
        </article>
        </body>
        </html>    
        `
}