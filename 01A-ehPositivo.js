function ehPositivo(num) {
    num = parseInt(num)

    if (isNaN(num)) {
        return "entrada inválida"
    }

    if (num > 0) {
        return true
    }

    return false
}

module.exports = ehPositivo