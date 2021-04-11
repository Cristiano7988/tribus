import React, { useContext } from 'react';
import {Redirect, Route} from 'react-router-dom';
import AuthContext from '../../../contexts/AuthContext';

const RotasPrivadas = ({component: Component, ...rest}) => {
    const {token} = useContext(AuthContext);

    return (
        <Route
            {...rest}
           render={()=> token
                ? <Component {...rest} />
                : <Redirect to="/home"/>
            } 
        />
    );
};

export default RotasPrivadas;