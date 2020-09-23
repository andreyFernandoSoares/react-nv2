import React from 'react';
import './App.css';
import FormularioCadastro from './components/Formulario/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto';
import {validarCpf, validarSenha} from "./models/cadastro";
import ValidacoesDeCadastro from './context/ValidacoesDeCadastro';

function App() {
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

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
