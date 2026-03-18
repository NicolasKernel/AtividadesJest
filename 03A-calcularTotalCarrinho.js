function calcularTotalCarrinho(itens) {
    if (!Array.isArray(itens) || itens.length === 0) {
        return 0;
    }

    let total = 0;
    for (let item of itens) {
        const preco = parseFloat(item.preco);
        const qtd = parseInt(item.quantidade);

        // Se os valores forem válidos, soma ao total
        if (!isNaN(preco) && !isNaN(qtd)) {
            total += preco * qtd;
        }
    }

    return total;
}

module.exports = calcularTotalCarrinho;