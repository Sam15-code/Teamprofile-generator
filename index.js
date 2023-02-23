import { prompt } from "inquirer"
import Engineer from "./lib/Engineer"
import Intern from "./lib/intern"
import Manager from "./lib/Manager"
import { writeFileSync } from "fs"
import createHTML from "./utils/createHTML"
let mnagerDB = []
let engineerDB = []
let internDB = []


function addManager() {
    prompt([
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
    prompt([
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
    prompt([
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
    prompt([
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


function generateHTML() {
    writeFileSync("./dist/index.html", createHTML(managerDB, engineerDB, internDB), function (err) {
        if (err) throw err;
    })
}