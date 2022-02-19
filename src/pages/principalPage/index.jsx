import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Divider, Avatar, Typography , Box } from '@mui/material'
import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";
import Perfil from './components/perfil';
import sessionService from '../../services/session.service'
import CircularProgress from '@mui/material/CircularProgress';

const PrincipalPage = props => {

    
    const [user, setUser] = useState(null)

    useEffect(() => {
        sessionService.getUserData().then(
          response => {
            setUser(response.user)
          }
        )
      }, [])

    return (
        <Grid container spacing={2}>
                <Grid align='center' mb={3} xs={12} item>
                        <Avatar alt="UNDAV" src={logo} sx={{width: 280, height: 184}} variant="rounded"/>
                </Grid>
                <Grid item xs={12}>
                    <Divider />  
                </Grid>

                <Grid item xs={12} md={4} align="center">
                    <Link to="/foro/universidad">
                        <Button variant="outlined">Dudas Universitarias</Button>
                    </Link>
                </Grid>
                
                <Grid item xs={12} md={4} align="center">
                    <Link to="/foro/trabajo">
                        <Button variant="outlined">Dudas Laborales</Button>
                    </Link>
                </Grid>
                
                <Grid item xs={12} md={4} align="center">
                    <Link to="/foro/tecnologia">
                        <Button variant="outlined">Dudas Técnicas</Button>
                    </Link>
                </Grid>

                <Grid item xs={12}>
                    <Divider />  
                </Grid>

                
                <Grid item xs={12} md={6} align="center">
                    <Link to="/eventos">
                        <Button variant="outlined">Eventos</Button>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} align="center">
                    <Link to="/postularme-admin">
                        <Button variant="outlined">Postularme Admin</Button>
                    </Link>
                </Grid>

                {
                    user ? 
                    <Perfil user={user}/>
                    :
                    <Grid item xs={12} align="center">
                        <CircularProgress />
                    </Grid>
                }

        </Grid>
        
    )
}

PrincipalPage.propTypes = {

}

export default PrincipalPage
