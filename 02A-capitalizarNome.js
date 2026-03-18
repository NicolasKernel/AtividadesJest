function capitalizarNome (nomeCompleto) {
        if (typeof nomeCompleto !== 'string' || nomeCompleto.trim() === "") {
            return "";
        }

        return nomeCompleto
            .toLowerCase()
            .split(' ')
            .filter(parte => parte.length > 0) // Remove espaços duplos
            .map(parte => parte.charAt(0).toUpperCase() + parte.slice(1))
            .join(' ');
    }

module.exports = capitalizarNome;