const Manager = require('../lib/manager.js');
const manager = new Manager('Mr T.E.S.T Manager', '0000', 'Test@Testmail.com', "0800 00 1066")

// Checks that the class being tested is an object.
test('Checks that the data within manager class is an object', () => {
    expect(typeof(manager)).toBe('object');
});

// Checks the values of the class
test('Checks the name, id, email and office number values of manager object', () => {
    expect(manager.name).toBe('Mr T.E.S.T Manager');
    expect(manager.id).toBe('0000');
    expect(manager.email).toBe('Test@Testmail.com');
});

// Checks unique getOfficeNumber() function of manager class
test("Checks the the intern class returns the correct school", () => {
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining("0800 00 1066"));
});

// Checks getRole() function of manager class
test("Checks the the manager class returns the correct role", () => {
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});