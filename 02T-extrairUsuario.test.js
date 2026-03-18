const extrairUsuario = require('./02A-extrairUsuario.js')

describe('12. extrairUsuario', () => {
        test('deve extrair o usuário corretamente', () => {
            expect(extrairUsuario("fulano@gmail.com")).toBe("fulano");
        });

        test('deve retornar a string original se não houver @', () => {
            expect(extrairUsuario("stringsemarroba")).toBe("stringsemarroba");
        });

        test('deve considerar apenas o primeiro @ se houver múltiplos', () => {
            expect(extrairUsuario("primeiro@segundo@uol.com.br")).toBe("primeiro");
        });

        test('deve retornar string vazia se a entrada for vazia', () => {
            expect(extrairUsuario("")).toBe("");
        });
    });