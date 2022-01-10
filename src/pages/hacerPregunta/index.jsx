import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper, Stack } from '@mui/material'
import { UNIVERSIDAD, TECNOLOGIA, TRABAJO } from './../../constants/tipoDuda'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dudasService from '../../services/dudas.service';


const HacerPregunta = props => {

    const guardarDuda = () => {
        dudasService.guardarDuda(titulo, descripcion, tags, tipoDuda).then(
            response => {
                setTitulo("")
                setDescripcion("")
                setTags("")
            },
            error => {

            }
        );
    }

    const [tipoDuda, setTipoDuda] = React.useState("");
    const handleChangeTipoDuda = (event) => {setTipoDuda(event.target.value);};
    
    const [titulo, setTitulo] = React.useState("");
    const handleChangeTitulo = (event) => {setTitulo(event.target.value);};

    const [descripcion, setDescripcion] = React.useState("");
    const handleChangeDescripcion = (event) => {setDescripcion(event.target.value);};

    const [tags, setTags] = React.useState("");
    const handleChangeTags = (event) => {setTags(event.target.value);};

    return (
            <Grid>
                <Paper elevation={10} style={{ padding: 20, width: 600, margin: "10px auto"}}>
                    <Grid align='center' mb={3}>
                        <Stack spacing={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tipo de duda</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={tipoDuda}
                                    label="Tipo de duda"
                                    onChange={handleChangeTipoDuda}
                                >
                                <MenuItem value={UNIVERSIDAD}>Universitarias</MenuItem>
                                <MenuItem value={TECNOLOGIA}>Tecnología</MenuItem>
                                <MenuItem value={TRABAJO}>Laborales</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField onChange={handleChangeTitulo} id="titulo" label="Titulo" variant="outlined" />
                            <TextField onChange={handleChangeDescripcion} id="descripcion" label="Descripcion" variant="outlined" multiline rows={4}/>
                            <TextField onChange={handleChangeTags} id="tags" label="Tags" variant="outlined" helperText="Ingrese los tags separados por espacios" />
                            
                        </Stack>
                    </Grid>
                    <Grid align='center' mb={3} mt={3}>
                        <Button variant="contained" onClick={guardarDuda}>Guardar Duda</Button>
                    </Grid>
                </Paper>
            </Grid>
    )
}

HacerPregunta.propTypes = {

}

export default HacerPregunta
