const subtrair = require('./01A-subtrair')


describe('Exercícios Básicos de Lógica 1', () => {

    test('2. Subtrair: cenários diversos', () => {
        expect(subtrair(5, 3)).toBe(2);
        expect(subtrair(-1, -5)).toBe(4);
        expect(subtrair(0, 0)).toBe(0);
        expect(subtrair("a", 2)).toBe("insira apenas numeros válidos"); // Inválido
    })
});