const Intern = require('../lib/Intern.js');
const intern = new Intern('Mr T.E.S.T Intern', '0000', 'Test@Testmail.com', "University Of Testin'borough")

// Checks that the class being tested is an object.
test('Checks that the data within intern class is an object', () => {
    expect(typeof(intern)).toBe('object');
});

// Checks the values of the class
test('Checks the name, id, email and school values of the intern object', () => {
    expect(intern.name).toBe('Mr T.E.S.T Intern');
    expect(intern.id).toBe('0000');
    expect(intern.email).toBe('Test@Testmail.com');
    expect(intern.school).toBe("University Of Testin'borough");
});

// Checks unique getSchool() function of intern class
test("Checks the the intern class returns the correct school", () => {
    expect(intern.getSchool()).toEqual(expect.stringContaining("University Of Testin'borough"));
});

// Checks getRole() function of intern class
test("Checks the the intern class returns the correct role", () => {
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});