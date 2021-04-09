import ValidacoesCadastro from './ValidacoesCadastro';
import { validarEmail, validarPreenchimento, validarSenha } from '../models/cadastro';
import Form from '../components/pages/Form';

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
