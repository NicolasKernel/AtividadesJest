function calcularIR(salarioAnual) {
    const salario = parseFloat(salarioAnual);

    if (isNaN(salario) || salario < 0) {
        return "entrada inválida";
    }

    if (salario <= 22847.76) {
        return 0;
    } else if (salario <= 33919.80) {
        return salario * 0.075;
    } else if (salario <= 45012.60) {
        return salario * 0.15;
    } else if (salario <= 55976.16) {
        return salario * 0.225;
    } else {
        return salario * 0.275;
    }
}

module.exports = calcularIR;