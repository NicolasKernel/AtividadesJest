const validarEmail = require('./02A-validarEmail.js')

    describe('11. validarEmail', () => {
        test('deve retornar true para e-mail válido', () => {
            expect(validarEmail("teste@provedor.com")).toBe(true);
        });

        test('deve retornar false se não houver @', () => {
            expect(validarEmail("testeprovedor.com")).toBe(false);
        });

        test('deve retornar false se houver mais de um @', () => {
            expect(validarEmail("teste@extra@provedor.com")).toBe(false);
        });

        test('deve retornar false se o domínio não tiver ponto', () => {
            expect(validarEmail("usuario@provedor")).toBe(false);
        });

        test('deve retornar false se a parte antes do @ for vazia', () => {
            expect(validarEmail("@provedor.com")).toBe(false);
        });
    });