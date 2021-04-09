import React, { useContext, useState } from 'react';
import { Button, Container, Grid, Link, TextField, Typography } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

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
        <Container align="center">
            <Typography
                variant="h4"
                component="h1"
                children="tribes"
            />
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(possoEnviar()) {
                    
                }
            }}>
                <TextField
                    value={nome}
                    onChange={(e)=>{
                        e.preventDefault();
                        setNome(e.target.value);
                    }}
                    onBlur={validarCampo}
                    error={!erros.nome.valido}
                    helperText={erros.nome.texto}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="NOME"
                    id="nome"
                    name="nome"
                    required
                />
                <TextField
                    value={sobrenome}
                    onChange={(e)=>{
                        e.preventDefault();
                        setSobrenome(e.target.value);
                    }}
                    onBlur={validarCampo}
                    error={!erros.sobrenome.valido}
                    helperText={erros.sobrenome.texto}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="SOBRENOME"
                    id="sobrenome"
                    name="sobrenome"
                    required
                />
                <TextField
                    value={username}
                    onChange={(e)=>{
                        e.preventDefault();
                        setUsername(e.target.value);
                    }}
                    onBlur={validarCampo}
                    error={!erros.username.valido}
                    helperText={erros.username.texto}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="USERNAME"
                    id="username"
                    name="username"
                    required
                />
                <TextField
                    value={email}
                    onChange={(e)=>{
                        e.preventDefault();
                        setEmail(e.target.value);
                    }}
                    onBlur={validarCampo}
                    error={!erros.email.valido}
                    helperText={erros.email.texto}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="EMAIL"
                    id="email"
                    name="email"
                    type="mail"
                    required
                />
                <TextField
                    value={senha}
                    onChange={(e)=>{
                        e.preventDefault();
                        setSenha(e.target.value);
                    }}
                    onBlur={validarCampo}
                    error={!erros.senha.valido}
                    helperText={erros.senha.texto}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="SENHA"
                    id="senha"
                    name="senha"
                    type="password"
                    required
                />
                <TextField
                    value={senha_repetida}
                    onChange={(e)=>{
                        e.preventDefault();
                        setSenha_repetida(e.target.value);
                    }}
                    onBlur={validarCampo}
                    error={!erros.senha_repetida.valido}
                    helperText={erros.senha_repetida.texto}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="DIGITE A SENHA NOVAMENTE"
                    id="senha_repetida"
                    name="senha_repetida"
                    type="password"
                    required
                />
                <Grid container justify="space-between">
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        children="CADASTRAR"
                    />
                    <Button 
                        variant="contained"
                        color="primary"
                        children="SIGN IN"
                    />
                </Grid>
            </form>
            <Typography component="p">
                Já possui uma conta? <Link href="/login" children="Faça login" />
            </Typography>
        </Container>
    );
}
 
export default Form;