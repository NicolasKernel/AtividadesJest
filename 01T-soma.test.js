const soma = require('./01A-soma')

describe('Exercícios Básicos de Lógica 1', () => {

    test('1. Somar: cenários diversos', () => {
        expect(soma(2, 3)).toBe(5);
        expect(soma(-1, -5)).toBe(-6);
        expect(soma(0, 0)).toBe(0);
        expect(soma("a", 2)).toBe("insira apenas numeros válidos");
    })
});