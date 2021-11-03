const reverse = require('./reverse-string.js');

test("Should pass when string is reversed", () => {
    expect(reverse('blessed')).toMatch('desselb');
});