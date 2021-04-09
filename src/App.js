import './App.css';
import Form from './components/form';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import { validarEmail, validarPreenchimento, validarSenha } from './models/cadastro';


function App() {
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

export default App;
