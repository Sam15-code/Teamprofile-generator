function createHTML(managerDB,engineerDB,internDB){
    const managerTemplate = createManagerHTML(managerDB)
    const engineerTemplate = createEngineerHTML(engineerDB)
    const internTemplate = createInternHTML(internDB)
const htmlcode =`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
  <body>
    <header class="bg-danger text-center text-white">
    <h1>Team Profile Generator</h1>
    <h6>By Ibtissam</h6>
    </header>
    <main class="container">
    <section class="row">
    <section class="col-md-12">
    <h4 class="text-center">Manager</h4>
    <article class="d-flex flex-wrap justify-content-evenly">
    ${managerTemplate}
    </article>
    </section>
    </section>
    <section class="row">
    <section class="col-md-12">
    <h4 class="text-center">Engineer</h4>
    <article class="d-flex flex-wrap justify-content-evenly">
    ${engineerTemplate}
    </article>
    </section>
    </section>
    <section class="row">
    <section class="col-md-12">
    <h4 class="text-center">Intern</h4>
    <article class="d-flex flex-wrap justify-content-evenly">
    ${internTemplate}
    </article>
    </section>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>`
return htmlcode
}


function createManagerHTML(managerDB){
    let manager = ""
    for(let i =0;i<managerDB.length;i++){
        manager += `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Manager: ${managerDB[i].name}</h5>
    <p class="card-text">Id: ${managerDB[i].id}</p>
    <p class="card-text">Office Number: ${managerDB[i].officeNumber}</p>
    <a href="mailto:${managerDB[i].email}" class="btn btn-primary">Email me at ${managerDB[i].email}</a>
  </div>
</div>
        
        `
    }
    return manager
}

function createEngineerHTML(engineerDB){
    let engineer = ""
    for(let i =0;i<engineerDB.length;i++){
        engineer += `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Manager: ${engineerDB[i].name}</h5>
    <p class="card-text">Id: ${engineerDB[i].id}</p>
    <a href="https://github.com/${engineerDB[i].github}" class="btn btn-primary">Github Profil</a>
    <a href="mailto:${engineerDB[i].email}" class="btn btn-primary">Email me at ${engineerDB[i].email}</a>
  </div>
</div>
        
        `
    }
    return engineer
}

function createInternHTML(internDB){
    let intern = ""
    for(let i =0;i<internDB.length;i++){
        intern += `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Manager: ${internDB[i].name}</h5>
    <p class="card-text">Id: ${internDB[i].id}</p>
    <a href="mailto:${internDB[i].email}" class="btn btn-primary">Email me at ${internDB[i].email}</a>
  </div>
</div>
        
        `
    }
    return intern
}


module.exports = createHTML