const validarCPF = require('./03A-validarCPF.js');

describe('18. validarCPF', () => {
    test('deve retornar true para um CPF válido conhecido', () => {
        expect(validarCPF("52998224725")).toBe(true);
    });

    test('deve retornar false para CPFs com sequências repetidas', () => {
        expect(validarCPF("11111111111")).toBe(false);
        expect(validarCPF("00000000000")).toBe(false);
    });

    test('deve retornar false para CPF com tamanho inválido', () => {
        expect(validarCPF("123456789")).toBe(false);
        expect(validarCPF("123456789012")).toBe(false);
    });

    test('deve retornar false para CPF com dígitos verificadores errados', () => {
        // CPF quase correto, mas com o último dígito alterado
        expect(validarCPF("52998224720")).toBe(false);
    });

    test('deve validar corretamente mesmo se vier com pontos e hífen', () => {
        expect(validarCPF("529.982.247-25")).toBe(true);
    });
});