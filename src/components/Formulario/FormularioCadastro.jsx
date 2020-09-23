import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, {Fragment, useState, useEffect} from 'react';
import DadosDeEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar}) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if(etapaAtual === formularios.length-1) {
            aoEnviar(dadosColetados);
        }
    });

    const formularios = [
        <DadosUsuario aoEnviar={coletardados} />, 
        <DadosPessoais aoEnviar={coletardados} />,
        <DadosDeEntrega aoEnviar={coletardados} />,
        <Typography variant="h5">Obrigado pelo Cadastro</Typography>
    ];

    function coletardados(dados){
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual+1);
    }

    return(
        <Fragment>
            <Stepper activeStep={etapaAtual}>
               <Step><StepLabel>Login</StepLabel></Step>
               <Step><StepLabel>Pessoal</StepLabel></Step>
               <Step><StepLabel>Entrega</StepLabel></Step>
               <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </Fragment>
    );
}

export default FormularioCadastro;