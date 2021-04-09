import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import RotasPrivadas from "./private/Private";
import AuthProvider from "../../contexts/AuthProvider";
import Cadastro from "../../Cadastro";

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