import Form from './components/Form';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import { validarEmail, validarPreenchimento, validarSenha } from './models/cadastro';

function Cadastro() {
  return (
    <ValidacoesCadastro.Provider
      value={{
        nome: validarPreenchimento,
        sobrenome: validarPreenchimento,
        username: validarPreenchimento,
        email: validarEmail,
        senha: validarSenha,
        senha_repetida: validarSenha,
      }}>
      <Form />
    </ValidacoesCadastro.Provider>
  );
}

export default Cadastro;
