function validarPreenchimento(conteudo) {
    if(conteudo.length < 4) {
        return {valido: false, texto: "Este campo deve conter no mínimo 4 dígitos"}
    } else {
        return {valido: true, texto: ""}
    }
}

function validarEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(String(email).toLowerCase()) ) {
        return {valido: false, texto: "Insira um email válido"}
    } else {
        return {valido: true, texto: ""}
    }
}

function validarSenha(senha) {
    if(senha.length < 4 || senha.length > 72) {
        return {valido: false, texto: "Senha deve ter entre 4 e 72 digitos"}
    } else {
        return {valido: true, texto: ""}
    }
}

export { validarSenha, validarPreenchimento, validarEmail};