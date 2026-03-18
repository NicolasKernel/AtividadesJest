function extrairUsuario (email) {
        if (typeof email !== 'string') return "";
        const dividido = email.split('@');
        return dividido[0];
    }

module.exports = extrairUsuario;