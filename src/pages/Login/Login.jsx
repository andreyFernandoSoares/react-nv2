import { Container, Typography } from '@material-ui/core';
import React, { Fragment } from 'react'
import ValidacoesDeCadastro from '../../context/ValidacoesDeCadastro';
import {validarSenha} from "../../models/cadastro";

import LoginForm from './components/LoginForm';

const Login = () => {
    return(
        <Fragment>
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" align="center">Logar</Typography>
                <ValidacoesDeCadastro.Provider value={{senha: validarSenha}}>
                    <LoginForm enviarLogin={enviarLogin}/>
                </ValidacoesDeCadastro.Provider>
            </Container>
        </Fragment>
    );
}

async function enviarLogin(dados) {
   // const logado = await api.post('/login', dados);
   // console.log(logado.data);
   console.log(dados);
}

export default Login;