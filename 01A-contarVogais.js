function contarVogais(str) {
    if (typeof str !== "string") {
        return "entrada inválida"
    }

    const vogais = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            count++;
        }
    }

    return count;
}

module.exports = contarVogais