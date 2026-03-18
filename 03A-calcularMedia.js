function calcularMedia(notas) {
    if (!Array.isArray(notas) || notas.length === 0) {
        return 0;
    }

    const soma = notas.reduce((acc, nota) => {
        const n = parseFloat(nota);
        return acc + (isNaN(n) ? 0 : n);
    }, 0);

    return soma / notas.length;
}

module.exports = calcularMedia;