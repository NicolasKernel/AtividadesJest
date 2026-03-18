const dividir = require('./01A-dividir')


describe('Exercícios Básicos de Lógica 1', () => {

    test('4. Dividir: cenários diversos', () => {
        expect(dividir(6, 2)).toBe(3);
        expect(dividir(-10, -2)).toBe(5);
        expect(dividir(0, 0)).toBe("insira apenas numeros válidos");
        expect(dividir("a", 2)).toBe("insira apenas numeros válidos");
    })
});