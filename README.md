# Teamprofile-generator

  ## Description

This application will generate a team profile HTML webpage using node.js based on the user's input in the command line. User input will be captured using the inquirer module and the file will be generated using the file system (fs) module. The generated HTML webpage will display a dashboard of team profiles including a manager, engineers(s) and intern(s). Each employee will share common information such as name, id and email while other employee types will contain unique data. In addition to the HTML file, CSS will stylize all elements and provide a responsive application.

## Table of Contents

- [Teamprofile-generator](#teamprofile-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Acceptance Criteria](#acceptance-criteria)
  - [License](#license)
  - [Screenrecordings](#screenrecordings)

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```


## License

This project was created by Ibtissam Elbessali.


## Screenrecordings
![Screenrecording]()

