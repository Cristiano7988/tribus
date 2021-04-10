import Fundo from '../img/paisagem.png';
import styled from 'styled-components';

const text = {
  fontFamily: "Montserrat",
  color: "#FFFFFF"
};

const button = {
  fontWeight: "700",
  minWidth: "40%",
  width: "100%",
  ...text
};

const field = {
  fontSize: "14px",
  fontWeight: 300,
  backgroundColor: "#47484C",
  color: "#E4E7FF",
  borderRadius: "8px",
  borderBottom: "3px solid #E57728"
};

const ContainerTitulo = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "20px",
  paddingBottom: "10px",
  height: "130px"
};

const BottomText = {
  fontSize: "16px",
  fontWeight: 300,
  color: "#FFFFFF",
  textAlign: "center",
  paddingTop: "70px",
  paddingBottom: "17px",
  ...text
};

const theme = {
  contained: {
    padding: "unset",
    backgroundImage: `url(${Fundo})`,
    backgroundSize: "cover"
  },
  efeito: {
    paddingLeft: "30px",
    paddingRight: "30px",
    background: "rgba(0, 0, 0, 0.65)",
    backdropFilter: "blur(4px)",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  orangeButton: {
    marginRight: "7.5px",
    backgroundColor: "#E57728",
    ...button
  },
  blueButton: {
    marginLeft: "7.5px",
    backgroundColor: "#3A5998",
    ...button,
    img: {
      position: "absolute",
      left: "14px",
      top: "8px"
    }
  },
  label: {
    fontFamily: "Montserrat",
    fontSize: "12px",
    fontWeight: 700,
    paddingBottom: "7px",
    ...text
  },
  container: {
    paddingBottom: "20px",
    ...text
  },
  niceField: {
    ...field
  },
  bottomText: {
    ...BottomText
  },
  path: {
    textDecoration: "underline",
    ...BottomText
  },
  titulo: {
    color: "#84BF67",
    textAlign: "center",
    fontFamily: ["Myriad Pro", "Open Sans"],
    fontSize: "25px",
    paddingLeft: "10px",
    paddingBottom: "15px"
  },
  containerTituloPequeno: {
    ...ContainerTitulo,
  },
  containerTituloGrande: {
    height: "130px",
    ...ContainerTitulo
  }
};

export const Btn = styled.button(props => props.theme.orangeButton);
export const BtnBlue = styled.button(props => props.theme.blueButton);
export const Field = styled.input(props => props.theme.niceField);
export const Div = styled.div(props => props.theme.container);
export const Contained = styled.div(props => props.theme.contained);
export const Efeito = styled.div(props => props.theme.efeito);
export const Label = styled.label(props => props.theme.label);
export const Paragraph = styled.p(props => props.theme.bottomText);
export const Path = styled.a(props => props.theme.path);
export const Titulo = styled.h1(props => props.theme.titulo);
export const ContainerTituloGrande = styled.div(props => props.theme.containerTituloGrande);
export const ContainerTituloPequeno = styled.div(props => props.theme.containerTituloPequeno);

export default theme;