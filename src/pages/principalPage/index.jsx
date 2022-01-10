import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Paper, Avatar, Typography , Box } from '@mui/material'
import logo from '../../assets/img/logo.png'

const PrincipalPage = props => {
    return (
        <Grid>
        <Paper elevation={10} style={{ padding: 20, width: 650, margin: "10px auto"}}>
            <Grid align='center' mb={3}>
                    <Avatar alt="UNDAV" src={logo} sx={{width: 280, height: 184}} variant="rounded"/>
            </Grid>
            <Grid>
                <Typography paragraph={true} >Estimad@s:</Typography >
                <Typography paragraph={true}>
                    Les damos la bienvenida a la pantalla de Administrador, en la misma tienen la posibilidad de postularse para desempeñar dicho rol.
                    Es importante destacar que se analizará tu postulación a través de un proceso de análisis del cupo de género actual. Resulta relevante para nuestra institución respetar las políticas de género, es por ello que tenemos por objetivo respetar la igualdad y respectiva equidad a la hora de administrar el sitio.
                    Sin ir más lejos, les dejamos un la posibilidad de postularse en el siguiente botón:
                </Typography>
                <Box mt={4} mb={3}>
                    <Typography align={"center"}>
                        <Button variant="contained">
                            ¡Ingresar!
                        </Button>
                    </Typography>
                </Box>
                
            </Grid>
            
            </Paper>
        </Grid>
    )
}

PrincipalPage.propTypes = {

}

export default PrincipalPage
