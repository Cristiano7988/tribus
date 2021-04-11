import { Btn, Contained, ContainerTituloGrande, Div, Efeito, Field, Label, Paragraph, Path, Titulo } from '../../../utils/theme';
import { Box, Button, Container, InputLabel, Link, OutlinedInput, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../../contexts/AuthContext';
import Logo from '../../../img/logo.svg';

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
            return history.push("/perfil");
        }

        setValores(estadoInicial);
    }

    return (
        <Container component={Contained}>
            <Container component={Efeito}>
                <Box component={ContainerTituloGrande}>
                    <img height="100%" src={Logo} alt="tribes" />
                    <Typography
                        component={Titulo}
                        children="tribes"
                    />
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box component={Div}>
                        <InputLabel
                            component={Label}
                            children="USERNAME"
                        />
                        <OutlinedInput
                            value={valores.username}
                            onChange={handleChange}
                            inputComponent={Field}
                            fullWidth
                            id="username"
                            name="username"
                            required
                        />
                    </Box>
                    <Box component={Div}>
                        <InputLabel
                            component={Label}
                            children="SENHA"
                        />
                        <OutlinedInput
                            value={valores.senha}
                            onChange={handleChange}
                            inputComponent={Field}
                            fullWidth
                            id="senha"
                            name="senha"
                            required
                        />
                    </Box>
                    <Button
                        component={Btn}
                        type="submit"
                        variant="contained"
                        children="LOGIN"
                    />
                </form>
                <Typography component={Paragraph}>
                    Ainda Não possui uma conta? <Link href="/" component={Path} children="Cadastre-se" />
                </Typography>
            </Container>
        </Container>
    );
}

export default Login;