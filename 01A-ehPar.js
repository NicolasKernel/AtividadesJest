function ehPar(num) {
    num = parseInt(num)

    if (isNaN(num)) {
        return "entrada inválida"
    }

    resultado = num % 2 === 0
    if (resultado) {
        return true
    }

    return false
}


module.exports = ehPar