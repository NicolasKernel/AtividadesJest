function agruparPorCategoria(produtos) {
    if (!Array.isArray(produtos)) {
        return {};
    }

    const agrupado = {};

    produtos.forEach(produto => {
        const { nome, categoria } = produto;

        if (nome && categoria) {
            
            if (!agrupado[categoria]) { // Se a categoria ainda não existe no objeto, cria um array vazio
                agrupado[categoria] = [];
            }
            // Adiciona o nome do produto ao array da categoria correspondente
            agrupado[categoria].push(nome);
        }
    });

    return agrupado;
}

module.exports = agruparPorCategoria;