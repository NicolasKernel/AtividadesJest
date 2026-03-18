const ehPar = require('./01A-ehPar')

describe('Exercícios Básicos de Lógica 1', () => {

    test('5. checar se é par: cenários diversos', () => {
        expect(ehPar(4)).toBe(true);
        expect(ehPar(7)).toBe(false);
        expect(ehPar(0)).toBe(true);
        expect(ehPar("texto")).toBe("entrada inválida");
    })
});