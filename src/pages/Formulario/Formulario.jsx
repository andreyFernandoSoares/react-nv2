import React from 'react';
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto';
import {validarCpf, validarSenha} from "../../models/cadastro";
import api from '../../services/api';
import FormularioCadastro from './components/FormularioCadastro';
import ValidacoesDeCadastro from '../../context/ValidacoesDeCadastro';

const Formulario = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario de Cadastro
      </Typography>
      <ValidacoesDeCadastro.Provider value={{cpf: validarCpf, senha: validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm}/>
      </ValidacoesDeCadastro.Provider>
    </Container>
  );
}

async function aoEnviarForm(dados){
  await api.post('/cadastro', dados);
}

export default Formulario;