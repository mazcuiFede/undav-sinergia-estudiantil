import React from 'react'
import PropTypes from 'prop-types'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          borderRadius: 1,
          ...sx,
        }}
        {...other}
      />
    );
  }

const ForoItemsList = ({dudas}) => {
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', justifyContent: 'center', display: 'flex'  }}>
            <nav aria-label="main mailbox folders">
                <List sx={{ width: '100%'}}>
                    {
                        dudas.map(duda => 
                                <>
                                    <ListItem>
                                        <ListItemButton>
                                            <Stack spacing={2} direction="row">
                                                <Item><Button variant="outlined">{duda.puntos} puntos</Button></Item>
                                                <Item><Button variant="outlined">{duda.comentarios.length} comentarios</Button></Item>
                                                <Item><ListItemText primary={duda.titulo} /></Item>
                                                <Item>
                                                    <ListItemText secondary={
                                                        duda.tags.map(tags => {
                                                            return <Chip label={tags} variant="outlined" mr={2} />
                                                        })
                                                    } />
                                                </Item>
                                            </Stack>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </>
                        )
                    }
                    
                </List>
                
            </nav>
        </Box>
    )
}

ForoItemsList.propTypes = {

}

export default ForoItemsList
