const inquirer = require("inquirer")
const Engineer = require ("./lib/Engineer")
const Intern = require ("./lib/intern")
const Manager =require ("./lib/Manager")
const { writeFileSync } = require ("fs")
const createHTML = require ("./utils/createHTML")
let managerDB = []
let engineerDB = []
let internDB = []


function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter Team Manager's name: ",

        },


        {
            type: "input",
            name: "id",
            message: "Please enter Team Manager's id: ",

        },

        {
            type: "input",
            name: "email",
            message: "Please enter Team Manager's email: ",

        },

        {
            type: "input",
            name: "officenumber",
            message: "Please enter Team Manager's officenumber: ",

        }
    ]).then(({ name, id, email, officenumber }) => {
        const newHireManager = new Manager(name, id, email, officenumber)
        managerDB.push(newHireManager)
        hireTeamMembers()
    })
}


function hireTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do you like add team members? ",
            name: "continue",
            choices: ["Add Engineer", "Add Intern", "Generate Team HTML & Exit"]
        }
    ]).then(response => {
        switch (response.continue) {
            case "Add Engineer":
                addEngineer();
                break;
            case "Add Intern":
                addIntern();
                break;
            default:
                generateHTML()
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter Team Enginner's name: ",

        },


        {
            type: "input",
            name: "id",
            message: "Please enter Team Engineer's id: ",

        },

        {
            type: "input",
            name: "email",
            message: "Please enter Team Engineer's email: ",

        },

        {
            type: "input",
            name: "github",
            message: "Please enter Team Engineer's github: ",

        }
    ]).then(({ name, id, email, github }) => {
        const newHireEngineer = new Engineer(name, id, email, github)
        engineerDB.push(newHireEngineer)
        hireTeamMembers()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter Team Intern's name: ",

        },


        {
            type: "input",
            name: "id",
            message: "Please enter Team Intern's id: ",

        },

        {
            type: "input",
            name: "email",
            message: "Please enter Team Intern's email: ",

        },

        {
            type: "input",
            name: "school name",
            message: "Please enter Team Intern's school name: ",

        }
    ]).then(({ name, id, email, schoolName }) => {
        const newHireIntern = new Intern(name, id, email, schoolName)
        internDB.push(newHireIntern)
        hireTeamMembers()
    })
}
    addManager()


function generateHTML() {
    writeFileSync("index.html", createHTML(managerDB, engineerDB, internDB), function (err) {
        if (err) throw err;
    })
}