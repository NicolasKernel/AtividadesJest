function multiplicar(n1, n2) {
    n1 = parseInt(n1)
    n2 = parseInt(n2)

    if (isNaN(n1) || isNaN(n2)) {
        return "insira apenas numeros válidos"
    }

    resultado = n1 * n2
    return resultado
}

module.exports = multiplicar