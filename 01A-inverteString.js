function inverteString(str) {
    if (typeof str !== "string") {
        return "entrada inválida"
    }
    
    return str.split("").reverse().join("")
}

module.exports = inverteString