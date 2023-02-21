const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Sam15-code";
    const employeeInstance = new Engineer("Ibtissam", 2, "ibtissam.dxb@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Sam15-code";
    const employeeInstance = new Engineer("Ibtissam", 2, "ibtissam.dxb@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Ibtissam", 2, "ibtissam.dxb@gmail.com", "Sam15-code");
    expect(employeeInstance.getRole()).toBe(returnValue);
});