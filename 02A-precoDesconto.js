function precoDesconto (precoOriginal, percentualDesconto) {
        const preco = parseFloat(precoOriginal);
        const desconto = parseFloat(percentualDesconto);

        if (isNaN(preco) || isNaN(desconto)) return null;
        
        // Validação do percentual
        if (desconto < 0 || desconto > 100) {
            return null; 
        }

        const valorDesconto = (preco * desconto) / 100;
        return preco - valorDesconto;
    }

module.exports = precoDesconto;