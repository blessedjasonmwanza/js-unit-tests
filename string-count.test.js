const strCounter = require('./string-counter.js');

test("takes a text as paramenter and returns its lenth", () => {
    expect(strCounter("blessed")).toBe(7);
    expect(() => {
        strCounter("Hello, My names are blessed Jason");
    }).toThrow();
});