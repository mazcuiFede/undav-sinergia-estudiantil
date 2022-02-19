import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Paper, Avatar, Typography , Box } from '@mui/material'
import logo from '../../assets/img/logo.png'
import sessionService from '../../services/session.service'

const PostularmeAdmin = props => {

    
    const postularme = () => {

        sessionService.updateUserStatus("postulado").then(
            response => {
                debugger
                // debugger
                // localStorage.setItem('token', response.token)
                // navigate("/principal");
            },
            error => {

            }
        )
    }

    return (
        <Grid>
        <Paper elevation={10} style={{ padding: 20, width: 650, margin: "10px auto"}}>
            <Grid align='center' mb={3}>
                    <Avatar alt="UNDAV" src={logo} sx={{width: 280, height: 184}} variant="rounded"/>
            </Grid>
            <Grid>
                <Typography paragraph={true} >Estimad@s:</Typography >
                <Typography paragraph={true}>
                    Les damos la bienvenida a la pantalla de Postulación para Administrador. <br />
                    Es importante destacar que se analizará tu postulación a través de un proceso de validación del cupo de género actual. En nuestra institución valoramos la igualdad entre todos los géneros.
                </Typography >
                <Typography paragraph={true}>
                    Sin ir más lejos, les dejamos la posibilidad de postularse en el siguiente botón:
                </Typography>
                <Box mt={4} mb={3}>
                    <Typography align={"center"}>
                        <Button variant="contained" onClick={postularme}>
                            ¡Quiero postularme como administrador/a!
                        </Button>
                    </Typography>
                </Box>
                
            </Grid>
            
            </Paper>
        </Grid>
    )
}

PostularmeAdmin.propTypes = {

}

export default PostularmeAdmin
