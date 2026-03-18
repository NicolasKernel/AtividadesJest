const capitalizarNome = require('./02A-capitalizarNome.js')

    describe('14. capitalizarNome', () => {
        test('deve capitalizar um nome simples em minúsculo', () => {
            expect(capitalizarNome("joão silva")).toBe("João Silva");
        });

        test('deve corrigir nomes todos em maiúsculo', () => {
            expect(capitalizarNome("MARIA SOUZA")).toBe("Maria Souza");
        });

        test('deve lidar com espaços extras entre os nomes', () => {
            expect(capitalizarNome("  jose   alberto  ")).toBe("Jose Alberto");
        });

        test('deve retornar string vazia para entradas inválidas', () => {
            expect(capitalizarNome("")).toBe("");
            expect(capitalizarNome(null)).toBe("");
        });
    })