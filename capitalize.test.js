const capitalize = require('./capitalize.js');

test("Return first character of a string capitalized", () => {
    expect(capitalize('blessed')).toMatch('Blessed');
    expect(() => {
        capitalize("");
    }).toThrow();
    expect(() => {
        capitalize(123);
    }).toThrow();
});