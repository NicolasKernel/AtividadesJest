function calcFatorial(num) {
    num = parseInt(num)
    if (isNaN(num) || num < 0) return "entrada inválida";
        if (num === 0 || num === 1) return 1;
        let res = 1;
        for (let i = 2; i <= num; i++) res *= i;
        return res;
}

module.exports = calcFatorial