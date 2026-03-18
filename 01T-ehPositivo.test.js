const ehPositivo = require('./01A-ehPositivo')

describe('Exercícios Básicos de Lógica 1', () => {

    test('6. checar se é positivo: cenários diversos', () => {
        expect(ehPositivo(5)).toBe(true);
        expect(ehPositivo(-3)).toBe(false);
        expect(ehPositivo(0)).toBe(false);
        expect(ehPositivo("texto")).toBe("entrada inválida");
    })
});