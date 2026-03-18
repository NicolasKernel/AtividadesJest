const calcularTotalCarrinho = require('./03A-calcularTotalCarrinho.js');

describe('16. calcularTotalCarrinho', () => {
    test('deve calcular o total de um carrinho com múltiplos itens', () => {
        const itens = [
            { preco: 10, quantidade: 2 },
            { preco: 5, quantidade: 4 }
        ];
        expect(calcularTotalCarrinho(itens)).toBe(40);
    });

    test('deve retornar 0 para um carrinho vazio', () => {
        expect(calcularTotalCarrinho([])).toBe(0);
    });

    test('deve lidar com strings numéricas nas propriedades', () => {
        const itens = [{ preco: "10.50", quantidade: "2" }];
        expect(calcularTotalCarrinho(itens)).toBe(21);
    });

    test('deve retornar 0 se a entrada não for um array', () => {
        expect(calcularTotalCarrinho(null)).toBe(0);
    });
});