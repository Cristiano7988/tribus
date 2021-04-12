import React, { useState } from 'react';
import useStorage from '../hooks/useStorage';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    const [token, setToken] = useStorage('token');
    const [perfil, setPerfil] = useState();
    const [topicos, setTopicos] = useState();

    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                perfil,
                setPerfil,
                topicos,
                setTopicos
            }}
        >{children}</AuthContext.Provider>
    )
}

export default AuthProvider;