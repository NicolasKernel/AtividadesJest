function validarCPF(cpf) {
    // Remove caracteres não numéricos
    const cpfLimpo = cpf.replace(/\D/g, '');

    // Verifica se tem exatamente 11 dígitos
    if (cpfLimpo.length !== 11) return false;

    // Verifica se é uma sequência repetida (ex: 11111111111)
    if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;

    // Cálculo do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    let digito1 = (resto === 10 || resto === 11) ? 0 : resto;

    if (digito1 !== parseInt(cpfLimpo.charAt(9))) return false;

    // Cálculo do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    let digito2 = (resto === 10 || resto === 11) ? 0 : resto;

    if (digito2 !== parseInt(cpfLimpo.charAt(10))) return false;

    return true;
}

module.exports = validarCPF;