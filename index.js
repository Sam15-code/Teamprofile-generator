const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const fs = require("fs")
const { off } = require("process")
let mnagerDB = []
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
            name: "officenumber",
            message: "Please enter Team Engineer's officenumber: ",

        }
    ]).then(({ name, id, email, officenumber }) => {
        const newHireEngineer = new Engineer(name, id, email, officenumber)
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
            name: "officenumber",
            message: "Please enter Team Intern's officenumber: ",

        }
    ]).then(({ name, id, email, officenumber }) => {
        const newHireIntern = new Intern(name, id, email, officenumber)
        internDB.push(newHireIntern)
        hireTeamMembers()
    })
}
