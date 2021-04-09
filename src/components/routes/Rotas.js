import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RotasPrivadas from "./private/Private";
import AuthProvider from "../../contexts/AuthProvider";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Cadastro from "../../contexts/Cadastro";

const Rotas = () => (
    <Router>
        <AuthProvider>
            <Switch>
                <Route path="/login" component={Login} />
                <RotasPrivadas path="/home" component={Home} />
                <Route path="/" component={Cadastro} />
            </Switch>
        </AuthProvider>
    </Router>
);

export default Rotas;