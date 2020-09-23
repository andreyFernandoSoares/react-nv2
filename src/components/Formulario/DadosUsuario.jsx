import { Button, TextField } from '@material-ui/core';
import React, {useState, useContext} from 'react'
import ValidacoesDeCadastro from '../../context/ValidacoesDeCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}) {
    
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const validacoes = useContext(ValidacoesDeCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={(event) => {
            event.preventDefault(); 
            if(possoEnviar()) {
                aoEnviar({email, senha});
            }
        }}>

            <TextField
                id="email"
                value={email}
                onChange={(event) => {setEmail(event.target.value);}}
                label="Email"
                type="email"
                required
                variant="outlined" 
                margin="normal"
                fullWidth
            />

            <TextField
                id="senha"
                value={senha}
                onChange={(event) => {setSenha(event.target.value);}}
                label="Senha"
                type="password"
                variant="outlined"
                onBlur={validarCampos} 
                margin="normal"
                name="senha"
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                required
                fullWidth
            />  
            
            <Button
                type="submit"
                variant="contained" 
                color="primary"
                > Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;