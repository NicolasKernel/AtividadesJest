const precoDesconto = require('./02A-precoDesconto.js')

describe('13. precoDesconto', () => {
        test('deve aplicar 10% de desconto corretamente', () => {
            expect(precoDesconto(100, 10)).toBe(90);
        });

        test('deve retornar o valor original se o desconto for 0%', () => {
            expect(precoDesconto(50, 0)).toBe(50);
        });

        test('deve retornar null para desconto negativo ou acima de 100', () => {
            expect(precoDesconto(100, -5)).toBe(null);
            expect(precoDesconto(100, 101)).toBe(null);
        });

        test('deve lidar com strings numéricas', () => {
            expect(precoDesconto("200", "50")).toBe(100);    
        });
    });