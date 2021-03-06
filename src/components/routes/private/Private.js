import React, { useContext } from 'react';
import {Redirect, Route} from 'react-router-dom';
import AuthContext from '../../../contexts/AuthContext';

const RotasPrivadas = ({component: Component, ...rest}) => {
    const {token, perfil} = useContext(AuthContext);

    return (
        <Route
            {...rest}
           render={()=> token && perfil 
                ? <Component {...rest} />
                : <Redirect to="/login"/>
            } 
        />
    );
};

export default RotasPrivadas;