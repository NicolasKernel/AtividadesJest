const calcularMedia = require('./03A-calcularMedia.js');

describe('17. calcularMedia', () => {
    test('deve calcular a média aritmética de notas típicas', () => {
        expect(calcularMedia([7, 8, 9, 10])).toBe(8.5);
    });

    test('deve retornar 0 para um array vazio', () => {
        expect(calcularMedia([])).toBe(0);
    });

    test('deve calcular corretamente notas decimais', () => {
        expect(calcularMedia([5.5, 6.5])).toBe(6);
    });

    test('deve lidar com apenas uma nota no array', () => {
        expect(calcularMedia([10])).toBe(10);
    });
});