import React from 'react';

const ValidacoesCadastro = React.createContext({
    nome: semValidacao,
    sobrenome: semValidacao,
    username: semValidacao,
    email: semValidacao,
    senha: semValidacao,
    senha_repetida: semValidacao,
});

function semValidacao() {
    return {valido: false, texto: ""}
}

export default ValidacoesCadastro;