const Engineer = require('../lib/Engineer.js')
const engineer = new Engineer('Mr T.E.S.T Engineer', '0000', 'Test@Testmail.com', 'ultimateTestGit')

// Checks that the class being tested is an object.
test('Checks that the data within engineer class is an object', () => {
    expect(typeof(engineer)).toBe('object');
});

// Checks the values of the class
test('Checks the name, id, email and github values of the engineer object', () => {
    expect(engineer.name).toBe('Mr T.E.S.T Engineer');
    expect(engineer.id).toBe('0000');
    expect(engineer.email).toBe('Test@Testmail.com');
    expect(engineer.github).toBe('ultimateTestGit');
});

// Checks unique getGithub() function of engineer class
test("Checks the the engineer class returns the correct github", () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining('ultimateTestGit'));
});

// Checks getRole() function of engineer class
test("Checks the the engineer class returns the correct role", () => {
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});