const contarVogais = require('./01A-contarVogais.js')

describe('Exercícios Básicos de Lógica 1', () => {

    test('7. contar vogais: cenários diversos', () => {
        expect(contarVogais("hello")).toBe(2);
        expect(contarVogais("world")).toBe(1);
        expect(contarVogais("aeiou")).toBe(5);
        expect(contarVogais("bcdfg")).toBe(0);
    })
});