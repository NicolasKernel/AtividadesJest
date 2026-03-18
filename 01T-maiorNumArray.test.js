const maiorNumArray = require('./01A-maiorNumArray.js')

describe('Exercícios Básicos de Lógica 1', () => {

    test('10. encontrar maior número em um array: cenários diversos', () => {
        expect(maiorNumArray([1, 2, 3, 4, 5])).toBe(5);
        expect(maiorNumArray([10, "AV", 30])).toBe("entrada inválida");
        expect(maiorNumArray([-1, -2, -3])).toBe(-1);
        expect(maiorNumArray([100])).toBe(100);
        expect(maiorNumArray([])).toBe(undefined);
    })
});