function maiorNumArray(arr) {
    if (!Array.isArray(arr) || arr.some(isNaN)) return "entrada inválida";
    
    if (arr.length === 0) return undefined;

    return Math.max(...arr)
}

module.exports = maiorNumArray