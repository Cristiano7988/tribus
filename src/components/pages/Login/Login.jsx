import { Btn, ContainedLogin, ContainerForm, ContainerTituloGrande, Div, EfeitoLogin, Field, Label, Paragraph, Path, Titulo } from '../../../utils/theme';
import { Box, Button, Container, InputLabel, Link, OutlinedInput, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../../contexts/AuthContext';
import Logo from '../../../img/logo.svg';

function estadoInicial() {
    return {username: "", senha: ""};
}

function fetchSenha(username) {
    let url = `http://localhost:8000/users?username=${username}`;
    
    return fetch(url)
    .then(r => r.json())
    .then(r => r[0]);
}

function fetchTopicos(id) {
    let url = `http://localhost:8000/topicos?id_user=${id}`;
    
    return fetch(url)
    .then(r => r.json())
    .then(r => r);
}

async function logar({username, senha}) {
    let dados = await fetchSenha(username).then(r=>r);
    let topicos = await fetchTopicos(dados.id).then(r=>r);

    if(senha === dados.senha) {
        return {token: "123456789", dados, topicos};
    }
    return {error: "Usuário ou senha inválido!"}
}

const Login = () => {
    const [valores, setValores] = useState(estadoInicial);
    const {setToken, setPerfil, setTopicos} = useContext(AuthContext);
    const history = useHistory();

    function handleChange(e) {
        const {name, value} = e.target;
        setValores({
            ...valores,
            [name]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const {token, dados, topicos} = await logar(valores);

        if(token) {
            setToken(token);
            setPerfil(dados);
            setTopicos(topicos);
            return history.push("/home");
        }

        setValores(estadoInicial);
    }

    return (
        <Container component={ContainedLogin}>
            <Container component={EfeitoLogin}>
                <Box component={ContainerTituloGrande}>
                    <img height="100%" src={Logo} alt="tribes" />
                    <Typography
                        component={Titulo}
                        children="tribes"
                    />
                </Box>
                <Typography component={ContainerForm} onSubmit={handleSubmit}>
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
                            type="password"
                            required
                        />
                    </Box>
                    <Button
                        component={Btn}
                        type="submit"
                        variant="contained"
                        children="LOGIN"
                    />
                </Typography>
                <Typography component={Paragraph}>
                    Ainda Não possui uma conta? <Link href="/" component={Path} children="Cadastre-se" />
                </Typography>
            </Container>
        </Container>
    );
}

export default Login;