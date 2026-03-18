const calcularIR = require('./03A-calcularIR.js');

describe('19. calcularIR', () => {
    test('deve ser isento para salários até R$ 22.847,76', () => {
        expect(calcularIR(20000)).toBe(0);
        expect(calcularIR(22847.76)).toBe(0);
    });

    test('deve aplicar 7,5% para a segunda faixa', () => {
        expect(calcularIR(30000)).toBeCloseTo(2250, 2);
    });

    test('deve aplicar 27,5% para salários acima de R$ 55.976,16', () => {
        expect(calcularIR(100000)).toBeCloseTo(27500, 2);
    });

    test('deve retornar erro para valores negativos ou inválidos', () => {
        expect(calcularIR(-100)).toBe("entrada inválida");
        expect(calcularIR("texto")).toBe("entrada inválida");
    });
});