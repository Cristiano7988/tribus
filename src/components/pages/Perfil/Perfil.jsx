import { AppBar, Avatar, Badge, Container, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import penIcon from '../../../img/penIcon.svg';
import topicIcon from '../../../img/topicIcon.svg';
import cameraIcon from '../../../img/cameraIcon.svg';
import DragHandleOutlinedIcon from '@material-ui/icons/DragHandleOutlined';
import React from 'react';
import { Barra, containerImgPerfil, tituloSecundario, FotoBadge, TopicoLista, TextoPadrao } from '../../../utils/theme';

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const Perfil = () => (<>
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
                children="Nome do Usuário"
            />
            <img src={penIcon} width="20px" height="20px" alt="Editar" />
        </Toolbar>
    </AppBar>
    <Container align="center">
        <Badge
            overlap="circle"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            component={FotoBadge}
            badgeContent={<img alt="Tirar Foto" src={cameraIcon} />}
        >
            <Avatar component={containerImgPerfil} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </Badge>
        <Typography component={TextoPadrao} children="Prioridade de tópicos"/>
        <List>
            {generate(
                <ListItem component={TopicoLista}>
                    <ListItemIcon>
                        <img alt="Ícone do tópico" src={topicIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Single-line item" />
                    <DragHandleOutlinedIcon />
                </ListItem>,
            )}
        </List>
    </Container>
</>);

export default Perfil;