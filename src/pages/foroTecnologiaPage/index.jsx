import React, {useEffect, useState} from 'react'
import { Box, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import ForoItemsList from '../../components/ForoItemsList'
import dudasService from '../../services/dudas.service';

const ForoTecnologiaPage = props => {

    const [dudas, setDudas] = useState([])

    useEffect(() => {
        dudasService.dudasTecnologia().then(
            response => {
                setDudas(response.duda)
            },
            error => {

            }
        )
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={6}>
                    <Typography variant="h4">Dudas sobre Tecnología</Typography>
                </Grid>
                <Grid item xs={6} align={"right"}>
                    <Link to="/hacer-pregunta">
                        <Button variant="contained">Hacer una pregunta</Button>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    {
                        dudas && dudas.length > 0 ? 
                        <ForoItemsList dudas={dudas} />
                        :
                        <Typography className="text-center">No hay dudas cargadas</Typography>
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

ForoTecnologiaPage.propTypes = {

}

export default ForoTecnologiaPage
