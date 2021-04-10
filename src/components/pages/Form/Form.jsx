import { Btn, BtnBlue, Contained, ContainerTituloPequeno, Div, Efeito, Field, Label, Paragraph, Path, Titulo } from '../../../utils/theme';
import { Box, Button, Container, FormHelperText, Grid, InputLabel, Link, OutlinedInput, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../../contexts/ValidacoesCadastro';
import useErros from '../../../hooks/useErros';
import Logo from '../../../img/logo.svg';
import Facebook from '../../../img/facebook.svg';

function Form() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha_repetida, setSenha_repetida] = useState('');
    
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampo, possoEnviar] = useErros(validacoes);
    
    return (
        <Container component={Contained}>
            <Container component={Efeito}>
                <form align="left" onSubmit={(e)=>{
                    e.preventDefault();
                    if(possoEnviar()) {
                        
                    }
                }}>
                    <Box component={ContainerTituloPequeno}>
                        <img src={Logo} alt="tribes" />
                        <Typography
                            component={Titulo}
                            children="tribes"
                        />
                    </Box>
                    <Box component={Div}>
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
                    <Box component={Div}>
                        <InputLabel
                            component={Label}
                            children="SENHA"
                        />
                        <OutlinedInput
                            value={senha}
                            onChange={(e)=>{
                                e.preventDefault();
                                setSenha(e.target.value);
                            }}
                            inputComponent={Field}
                            onBlur={validarCampo}
                            fullWidth
                            type="password"
                            id="senha"
                            name="senha"
                            required
                        />
                        <FormHelperText
                            error={!erros.senha.valido}
                            children={erros.senha.texto}
                        />
                    </Box>
                    <Box component={Div}>
                        <InputLabel
                            component={Label}
                            children="DIGITE A SENHA NOVAMENTE"
                        />
                        <OutlinedInput
                            value={senha_repetida}
                            onChange={(e)=>{
                                e.preventDefault();
                                setSenha_repetida(e.target.value);
                            }}
                            inputComponent={Field}
                            onBlur={validarCampo}
                            fullWidth
                            id="senha_repetida"
                            name="senha_repetida"
                            type="password"
                            required
                        />
                        <FormHelperText
                            error={!erros.senha_repetida.valido}
                            children={erros.senha_repetida.texto}
                        />
                    </Box>
                    <Grid container wrap="nowrap" justify="space-between">
                        <Button
                            type="submit"
                            variant="contained"
                            component={Btn}
                            children="CADASTRAR"
                        />
                        <Button 
                            variant="contained"
                            component={BtnBlue}
                            startIcon={<img src={Facebook} alt="Facebook" />}
                            children="SIGN IN"
                        />
                    </Grid>
                </form>
                <Typography component={Paragraph}>
                    Já possui uma conta? <Link href="/login" component={Path} children="Faça login" />
                </Typography>
            </Container>
        </Container>
    );
}
 
export default Form;