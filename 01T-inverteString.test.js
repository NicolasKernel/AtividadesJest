const inverteString = require('./01A-inverteString.js')

describe('Exercícios Básicos de Lógica 1', () => {

    test('8. inverter string: cenários diversos', () => {
        expect(inverteString("hello")).toBe("olleh");
        expect(inverteString("world")).toBe("dlrow");
        expect(inverteString("aeiou")).toBe("uoiea");
        expect(inverteString("")).toBe("");
    })
});