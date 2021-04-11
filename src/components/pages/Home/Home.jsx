import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Barra, tituloSecundario } from '../../../utils/theme';
import React, { useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import penIcon from '../../../img/penIcon.svg';
import { Route, Switch } from 'react-router';
import Perfil from '../Perfil';
import Topico from '../Topico';
import AuthContext from '../../../contexts/AuthContext';

const Home = () => {
    const {perfil} = useContext(AuthContext);

    return (<>
        <AppBar position="static">
            <Toolbar component={Barra}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                <MenuIcon />
                </IconButton>
                <Typography
                    component={tituloSecundario}
                    children={perfil.nome + ' ' + perfil.sobrenome}
                />
                <img src={penIcon} width="20px" height="20px" alt="Editar" />
            </Toolbar>
        </AppBar>
        <Switch>
            <Route exact path="/home/" component={Perfil} />
            <Route exact path="/home/topico" component={Topico} />
        </Switch>
    </>);
}

export default Home;