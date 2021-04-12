import { Box, Container, FormHelperText, InputLabel, OutlinedInput, Switch, Typography } from '@material-ui/core';
import { ConfigTitulo, ConfigText, Div, Field, Label, OrangeIcon, GrayIcon } from '../../../utils/theme';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../../contexts/ValidacoesCadastro';
import useErros from '../../../hooks/useErros';
import lock from '../../../img/lock.svg';
import paletaDeCores from '../../../img/paletaDeCores.svg';
import upload from '../../../img/upload.svg';

const Config = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampo] = useErros(validacoes);

    return(
        <Container>
            <Box paddingTop={3}>
                <Typography component={ConfigTitulo} children="Notificações"/>
                <Box display="flex" justifyContent="space-between" paddingTop={2}>
                    <Typography component={ConfigText} children="Novas mensagens" />
                    <Switch color="primary" />
                </Box>
                <Box display="flex" justifyContent="space-between" paddingTop={2}>
                    <Typography component={ConfigText} children="Novas Amizades" />
                    <Switch color="primary" />
                </Box>
                <Box display="flex" justifyContent="space-between" paddingTop={2}>
                    <Typography component={ConfigText} children="Respostas de tópicos" />
                    <Switch color="primary" />
                </Box>
            </Box>

            <Box paddingTop={5} style={{opacity: .4}}>
                <Box display="flex" alignItems="center">
                    <Typography component={ConfigTitulo} children="Personalizar"/>
                    <img src={lock} alt="Cadeado" />
                </Box>
                <Box display="flex" justifyContent="space-between" paddingTop={2}>
                    <Typography component={ConfigText} children="Cor do tema" />
                    <Box component={OrangeIcon}>
                        <img src={paletaDeCores} alt="Paleta de Cores" />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" paddingTop={2}>
                    <Typography component={ConfigText} children="Fundo do perfil" />
                    <Box component={GrayIcon}>
                        <img src={upload} alt="Paleta de Cores" />
                    </Box>
                </Box>
            </Box>

            <Box paddingTop={5}>
                <Typography component={ConfigTitulo} children="Meu cadastro" />
                <Box component={Div} paddingTop={2}>
                    <InputLabel
                        component={Label}
                        children="NOME"
                    />
                    <OutlinedInput
                        value={nome}
                        onChange={(e)=>{
                            e.preventDefault();
                            setNome(e.target.value);
                        }}
                        inputComponent={Field}
                        onBlur={validarCampo}
                        fullWidth
                        id="nome"
                        name="nome"
                        required
                    />
                    <FormHelperText
                        error={!erros.nome.valido}
                        children={erros.nome.texto}
                    />
                </Box>
                <Box component={Div}>
                    <InputLabel
                        component={Label}
                        children="SOBRENOME"
                    />
                    <OutlinedInput
                        value={sobrenome}
                        onChange={(e)=>{
                            e.preventDefault();
                            setSobrenome(e.target.value);
                        }}
                        inputComponent={Field}
                        onBlur={validarCampo}
                        fullWidth
                        id="sobrenome"
                        name="sobrenome"
                        required
                    />
                    <FormHelperText
                        error={!erros.sobrenome.valido}
                        children={erros.sobrenome.texto}
                    />
                </Box>
                <Box component={Div}>
                    <InputLabel
                        component={Label}
                        children="USERNAME"
                    />
                    <OutlinedInput
                        value={username}
                        onChange={(e)=>{
                            e.preventDefault();
                            setUsername(e.target.value);
                        }}
                        inputComponent={Field}
                        onBlur={validarCampo}
                        fullWidth
                        id="username"
                        name="username"
                        required
                    />
                    <FormHelperText
                        error={!erros.username.valido}
                        children={erros.username.texto}
                    />
                </Box>
                <Box component={Div}>
                    <InputLabel
                        component={Label}
                        children="EMAIL"
                    />
                    <OutlinedInput
                        value={email}
                        onChange={(e)=>{
                            e.preventDefault();
                            setEmail(e.target.value);
                        }}
                        inputComponent={Field}
                        onBlur={validarCampo}
                        fullWidth
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                    <FormHelperText
                        error={!erros.email.valido}
                        children={erros.email.texto}
                    />
                </Box>
            </Box>
        </Container>
    )
};

export default Config;