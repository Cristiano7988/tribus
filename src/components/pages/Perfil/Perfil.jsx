import { Avatar, Badge, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { containerImgPerfil, FotoBadge, TopicoLista, TextoPadrao } from '../../../utils/theme';
import DragHandleOutlinedIcon from '@material-ui/icons/DragHandleOutlined';
import topicIcon from '../../../img/topicIcon.svg';
import cameraIcon from '../../../img/cameraIcon.svg';
import AuthContext from '../../../contexts/AuthContext';
import React, { useContext } from 'react';

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const Perfil = () => {
    const {perfil} = useContext(AuthContext);

    return (
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
                <Avatar component={containerImgPerfil} alt={perfil.nome + ' ' + perfil.sobrenome} src={'/img/' + perfil.foto} />
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
    )
};

export default Perfil;