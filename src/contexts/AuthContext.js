import { createContext } from 'react';

const AuthContext = createContext({
    token: null,
    setToken: () => {},
    perfil: null,
    setPerfil: () => {},
    topicos: null,
    setTopicos: () => {}
});

export default AuthContext;