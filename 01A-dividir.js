function dividir(n1, n2) {
    n1 = parseInt(n1)
    n2 = parseInt(n2)

    if (isNaN(n1) || isNaN(n2) || (n1 === 0 && n2 === 0)) {
        return "insira apenas numeros válidos"
    }

    resultado = n1 / n2
    return resultado
}

module.exports = dividir