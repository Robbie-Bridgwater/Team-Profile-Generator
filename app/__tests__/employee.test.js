const Employee = require('../lib/employee.js');
const employee = new Employee('Mr T.E.S.T Employee', '0000', 'Test@Testmail.com')

// Checks that the class being tested is an object.
test('Checks that the data within employee class is an object', () => {
    expect(typeof(employee)).toBe('object');
});

// Checks the values of the class
test('Checks the name, id and email values of the employee object', () => {
    expect(employee.name).toBe('Mr T.E.S.T Employee');
    expect(employee.id).toBe('0000');
    expect(employee.email).toBe('Test@Testmail.com');
});

// Checks getRole() function of employee class
test("gets employee's role", () => {
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});