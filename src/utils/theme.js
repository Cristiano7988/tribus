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

const containerTitulo = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "20px",
  paddingBottom: "10px",
  height: "130px"
};

const bottomText = {
  fontSize: "16px",
  fontWeight: 300,
  color: "#FFFFFF",
  textAlign: "center",
  paddingBottom: "17px",
  ...text
};

const containerIcon = {
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
};

const limpa = {
  height: "100%",
  maxWidth: "unset",
}

const Contained = {
  padding: "unset",
  margin: "unset",
  backgroundImage: `url(${Fundo})`,
  backgroundSize: "cover",
}

const Efeito = {
  paddingLeft: "30px",
  paddingRight: "30px",
  background: "rgba(0, 0, 0, 0.65)",
  backdropFilter: "blur(4px)",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}

const theme = {
  containedLogin: {
    ...limpa,
    ...Contained
  },
  efeitoLogin: {
    ...limpa,
    ...Efeito
  },
  containedCadastro: {
    maxWidth: "unset",
    ...Contained
  },
  efeitoCadastro: {
    maxWidth: "unset",
    ...Efeito
  },
  containerForm: {
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center"
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
    ...bottomText
  },
  path: {
    textDecoration: "underline",
    ...bottomText
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
    ...containerTitulo,
  },
  containerTituloGrande: {
    height: "130px",
    ...containerTitulo
  },
  appBar: {
    backgroundImage: "linear-gradient(to right, #E57728, #E5A858, #84C167)",
    justifyContent: "space-between",
  },
  tituloSecundario: {
    fontWeight: 700,
    fontSize: "19px",
    ...text
  },
  containerImgPerfil: {
    marginTop: "40px",
    marginBottom: "20px",
    width: "250px",
    height: "250px",
    fontSize: "100px",
    border: "9px solid #81C565"
  },
  fotoBadge: {
    span: {
      backgroundColor: "#E57728",
      height: "50px",
      width: "50px",
      borderRadius: "50%"
    }
  },
  textoPadrao: {
    ...text,
    fontSize: "18px",
    fontWeight: 400
  },
  topicoLista: {
    color: "white",
    fontSize: "18px",
    fontWeight: 400,
    backgroundColor: "#47484C",
    textAlign: "center", 
    marginBottom: "7px",
    borderRadius: "10px",
    img: {
      borderRadius: "50%"
    },
    span: {
      ...text,
    }
  },
  configTitulo: {
    fontSize: "16px",
    paddingRight: "5px",
    ...text
  },
  configText: {
    fontSize: "14px",
    ...text
  },
  orangeIcon: {
    backgroundColor: "#E57728",
    ...containerIcon
  },
  grayIcon: {
    backgroundColor: "#47484C",
    ...containerIcon
  }
};

export const Btn = styled.button(props => props.theme.orangeButton);
export const BtnBlue = styled.button(props => props.theme.blueButton);
export const Field = styled.input(props => props.theme.niceField);
export const Div = styled.div(props => props.theme.container);
export const ContainedLogin = styled.div(props => props.theme.containedLogin);
export const EfeitoLogin = styled.div(props => props.theme.efeitoLogin);
export const ContainedCadastro = styled.div(props => props.theme.containedCadastro);
export const EfeitoCadastro = styled.div(props => props.theme.efeitoCadastro);
export const Label = styled.label(props => props.theme.label);
export const Paragraph = styled.p(props => props.theme.bottomText);
export const Path = styled.a(props => props.theme.path);
export const Titulo = styled.h1(props => props.theme.titulo);
export const tituloSecundario = styled.h2(props => props.theme.tituloSecundario);
export const ContainerTituloGrande = styled.div(props => props.theme.containerTituloGrande);
export const ContainerTituloPequeno = styled.div(props => props.theme.containerTituloPequeno);
export const Barra = styled.div(props => props.theme.appBar);
export const containerImgPerfil = styled.div(props => props.theme.containerImgPerfil);
export const FotoBadge = styled.div(props => props.theme.fotoBadge);
export const TopicoLista = styled.li(props => props.theme.topicoLista);
export const TextoPadrao = styled.h3(props => props.theme.textoPadrao);
export const ConfigTitulo = styled.span(props => props.theme.configTitulo);
export const ConfigText = styled.span(props => props.theme.configText);
export const OrangeIcon = styled.div(props => props.theme.orangeIcon);
export const GrayIcon = styled.div(props => props.theme.grayIcon);
export const ContainerForm = styled.form(props => props.theme.containerForm);

export default theme;