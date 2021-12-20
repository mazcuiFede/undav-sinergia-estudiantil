import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ForoItemsList from '../../components/ForoItemsList'

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

const dudas = [
    {
        titulo: "How to add React JSX for every item in state array?",
        puntos: 3,
        comentarios: ["Muy bueno", "Muchas gracias"],
        tags: ["React", "Programacion"]
    },
    {
        titulo: "How to add React JSX for every item in state array?",
        puntos: 5,
        comentarios: ["Muy bueno", "Muchas gracias"],
        tags: ["React", "Programacion", "Programacion"]
    }
]

const ForoUniversidadPage = props => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={6}>
                    <Item><Typography variant="h4">Dudas Universitarias</Typography></Item>
                </Grid>
                <Grid item xs={6}>
                    <Item><Button variant="contained">Hacer una pregunta</Button></Item>
                </Grid>
                <Grid item xs={12}>
                    <Item><ForoItemsList dudas={dudas} /></Item>
                </Grid>
            </Grid>
        </Box>
        
    )
}

ForoUniversidadPage.propTypes = {

}

export default ForoUniversidadPage
