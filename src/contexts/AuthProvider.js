import React, { useState } from 'react';
import useStorage from '../hooks/useStorage';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    const [token, setToken] = useStorage('token');
    const [perfil, setPerfil] = useState();

    return (
        <AuthContext.Provider value={{token, setToken, perfil, setPerfil}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;