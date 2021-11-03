const strCounter = require('./string-counter.js');

test("takes a text as paramenter and returns its lenth", () => {
    expect(strCounter("blessed")).toBe(7);
});

test("should throw an error if text not between between or equal to 1-10", () => {
    expect(() => {
        strCounter("Hello, My names are blessed Jason");
    }).toThrow();
});