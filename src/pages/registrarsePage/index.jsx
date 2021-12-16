import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import Button from '@mui/material/Button';
import sessionService from '../../services/session.service';


const RegistrarsePage = props => {
    
    const [nombre, setNombre] = React.useState("");
    const [apellido, setApellido] = React.useState("");
    const [documento, setDocumento] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [linkImagen, setLinkImagen] = React.useState("");

    const handleChangeNombre = (event) => {setNombre(event.target.value);};
    const handleChangeApellido = (event) => {setApellido(event.target.value);};
    const handleChangeDocumento = (event) => {setDocumento(event.target.value);};
    const handleChangePassword = (event) => {setPassword(event.target.value);};
    const handleChangeLinkImagen = (event) => {setLinkImagen(event.target.value);};

    const registrarme = () => {
        const estudiante = { 
            nombre, apellido, documento, password, linkImagen
        }
        debugger
        sessionService.register(estudiante).then(
            response => {
                debugger
                console.log(response)
            },
            error => {

            }
        )
    }

    return (
        <>
            <Grid container spacing={2}>

                <Grid item xs={0} sm={3}></Grid>
                <Grid item xs={12} sm={6}>

                    <Stack spacing={2}>
                        <Typography variant="h2" component="div" gutterBottom>
                            Registrate
                        </Typography>
                        <TextField onChange={handleChangeNombre} id="nombre" label="Nombre" name="Nombre" variant="outlined" />
                        <TextField onChange={handleChangeApellido} id="apellido" label="Apellido" variant="outlined" />
                        <TextField onChange={handleChangePassword} id="password" label="Password" type="password" />
                        <TextField onChange={handleChangeDocumento} id="documento" label="Nro. de documento" variant="outlined" type="number"/>
                        <TextField onChange={handleChangeLinkImagen} id="linkImagen" label="Link Imagen de Perfil" variant="outlined" />
                        <Button variant="contained" onClick={registrarme}>Registrarme</Button>
                    </Stack>
      
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </>
    )
}

RegistrarsePage.propTypes = {

}

export default RegistrarsePage
