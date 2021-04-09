import { Button, Container, Link, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../../contexts/AuthContext';

function estadoInicial() {
    return {username: "", senha: ""};
}

function logar({username, senha}) {

    if(username === "admin" && senha ==="admin") {
        return {token: "123456789"};
    }
    return {error: "Usuário ou senha inválido!"}
}

const Login = () => {
    const [valores, setValores] = useState(estadoInicial);
    const {setToken} = useContext(AuthContext);
    const history = useHistory();

    function handleChange(e) {
        const {name, value} = e.target;
        setValores({
            ...valores,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const {token} = logar(valores)

        if(token) {
            setToken(token);
            return history.push("/home");
        }

        setValores(estadoInicial);
    }

    return (
        <Container align="center">
            <Typography
                component="h1"
                variant="h3"
                children="tribes"
            />
            <form onSubmit={handleSubmit}>
                <TextField
                    value={valores.username}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="username"
                    label="USERNAME"
                    required
                    />
                <TextField
                    value={valores.senha}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="senha"
                    label="SENHA"
                    required
                    type="password"
                />
                <Button
                    color="secondary"
                    type="submit"
                    variant="contained"
                    children="LOGIN"
                />
            </form>
            <Typography component="p">
                Ainda Não possui uma conta? <Link href="/" children="Cadastre-se" />
            </Typography>
        </Container>
    );
}

export default Login;