const multiplicar = require('./01A-multiplicar')


describe('Exercícios Básicos de Lógica 1', () => {

    test('3. Multiplicar: cenários diversos', () => {
        expect(multiplicar(5, 3)).toBe(15);
        expect(multiplicar(-1, -5)).toBe(5);
        expect(multiplicar(0, 0)).toBe(0);
        expect(multiplicar("a", 2)).toBe("insira apenas numeros válidos");
    })
});