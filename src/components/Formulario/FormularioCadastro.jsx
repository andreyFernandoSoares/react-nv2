import React, {useState} from 'react';
import {TextField, Button, Switch, FormControlLabel} from '@material-ui/core';

function FormularioCadastro({aoEnviar, validarCPF}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido: true, texto:""}});

    return(
        <form onSubmit={(event) => {event.preventDefault(); aoEnviar({nome, sobrenome, cpf, promocoes, novidades});}}>
            <TextField 
                id="nome"
                label="Nome" 
                value={nome}
                onChange={(event) => {setNome(event.target.value);}}
                variant="outlined" 
                margin="normal"
                fullWidth
            />

            <TextField 
                id="sobrenome" 
                value={sobrenome}
                onChange={(event) => {setSobrenome(event.target.value);}}
                label="Sobrenome" 
                variant="outlined" 
                margin="normal"
                fullWidth
            />

            <TextField 
                id="cpf" 
                label="CPF" 
                value={cpf}
                onChange={(event) => {setCpf(event.target.value);}}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={(event) => {const ehValido = validarCPF(cpf); setErros({cpf: ehValido})}}
                variant="outlined" 
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch name="promocoes" onChange={(event) => {setPromocoes(event.target.checked);}} color="primary" checked={promocoes} />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch name="novidades" onChange={(event) => {setNovidades(event.target.checked);}} color="primary" checked={novidades}/>}
            />

            <Button 
                type="submit" 
                variant="contained" 
                color="primary"> Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;
