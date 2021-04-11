import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RotasPrivadas from "./private/Private";
import AuthProvider from "../../contexts/AuthProvider";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import Cadastro from "../../contexts/Cadastro";

const Rotas = () => (
    <Router>
        <AuthProvider>
            <Switch>
                <Route path="/login" component={Login} />
                <RotasPrivadas path="/perfil" component={Perfil} />
                <Route path="/" component={Cadastro} />
            </Switch>
        </AuthProvider>
    </Router>
);

export default Rotas;