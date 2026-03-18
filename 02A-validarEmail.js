/* NOTAS
Contém exatamente um símbolo @.
A parte antes do @ não pode ser vazia.
A parte depois do @ deve conter pelo menos um ponto . (domínio) e não
pode ser vazia.
Retorne true se atender a esses critérios, false caso contrário. */


function validarEmail(email) {
    if (typeof email !== 'string') return false;
        
    const dividido = email.split('@')
        
        
    if (dividido.length !== 2) return false
        
    const usuario = dividido[0];
    const dominio = dividido[1];
        
    if (usuario.length === 0) return false;
        
    if (dominio.length === 0 || !dominio.includes('.')) return false;

    return true;
}

module.exports = validarEmail