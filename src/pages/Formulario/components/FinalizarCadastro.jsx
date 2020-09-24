import { Button } from '@material-ui/core';
import React from 'react';

const FinalizarCadastro = () => {
    return(
        <Button
            variant="contained"
            color="primary"
            href="/login"
            fullWidth
            >Ir para o Login
        </Button>
    );
}

export default FinalizarCadastro;