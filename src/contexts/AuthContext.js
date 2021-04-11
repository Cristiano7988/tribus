import { createContext } from 'react';

const AuthContext = createContext({
    token: null,
    setToken: () => {},
    perfil: null,
    setPerfil: () => {}
});

export default AuthContext;