const calcFatorial = require('./01A-calcFatorial.js')

describe('Exercícios Básicos de Lógica 1', () => {

    test('9. calcular fatorial: cenários diversos', () => {
        expect(calcFatorial(5)).toBe(120);
        expect(calcFatorial(0)).toBe(1);
        expect(calcFatorial(3)).toBe(6);
        expect(calcFatorial(-5)).toBe("entrada inválida")
    })
});