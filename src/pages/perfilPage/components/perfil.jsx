import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';

const Perfil = ({datosPersona}) => {
    return (
        <Box bgcolor="#B6B5C8" p={2}>
            <Grid container>
                <Grid item xs={6} align="right">
                    <Avatar
                            alt="Remy Sharp"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            sx={{ width: 100, height: 100 }}
                        />
                </Grid>
                <Grid item xs={6}>
                    <List dense={true}>
                        <ListItem>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Matias Federico Azcui"
                                
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SchoolIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Ingeniería informática"
                                secondary="4to año"
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}

Perfil.propTypes = {

}

export default Perfil
