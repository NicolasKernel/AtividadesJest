const agruparPorCategoria = require('./03A-agruparPorCategoria.js');

describe('20. agruparPorCategoria', () => {
    test('deve agrupar produtos corretamente por categoria', () => {
        const produtos = [
            { nome: 'Maçã', categoria: 'Fruta' },
            { nome: 'Banana', categoria: 'Fruta' },
            { nome: 'Cenoura', categoria: 'Legume' }
        ];
        const resultado = {
            Fruta: ['Maçã', 'Banana'],
            Legume: ['Cenoura']
        };
        expect(agruparPorCategoria(produtos)).toEqual(resultado);
    });

    test('deve retornar um objeto vazio para um array vazio', () => {
        expect(agruparPorCategoria([])).toEqual({});
    });

    test('deve retornar um objeto vazio se a entrada não for um array', () => {
        expect(agruparPorCategoria(null)).toEqual({});
    });

    test('deve ignorar produtos que não possuem nome ou categoria', () => {
        const produtos = [
            { nome: 'Uva', categoria: 'Fruta' },
            { nome: 'Incompleto' }
        ];
        expect(agruparPorCategoria(produtos)).toEqual({ Fruta: ['Uva'] });
    });
});