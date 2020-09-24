import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Formulario from './pages/Formulario/Formulario';
import Login from './pages/Login/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Formulario}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;