const caracteresRestantes = require('./02A-caracteresRestantes.js')

describe('15. caracteresRestantes', () => {
        test('deve retornar a sobra positiva quando dentro do limite', () => {
            expect(caracteresRestantes("Ola", 10)).toBe(7);
        });

        test('deve retornar zero quando o texto tem o tamanho exato do limite', () => {
            expect(caracteresRestantes("Teste", 5)).toBe(0);
        });

        test('deve retornar número negativo quando ultrapassar o limite', () => {
            expect(caracteresRestantes("Texto Longo", 5)).toBe(-6);
        });

        test('deve tratar texto vazio como 0 caracteres usados', () => {
            expect(caracteresRestantes("", 50)).toBe(50);
        });

        test('deve retornar erro para limite não numérico', () => {
            expect(caracteresRestantes("abc", "abc")).toBe("limite inválido");
        });
    });