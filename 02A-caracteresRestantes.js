function caracteresRestantes (texto, limite) {
        const t = typeof texto === 'string' ? texto : "";
        const l = parseInt(limite);

        if (isNaN(l)) return "limite inválido";

        // Retorna a diferença, dá positivo se sobrar e negativo se exceder
        return l - t.length;
    }

module.exports = caracteresRestantes;