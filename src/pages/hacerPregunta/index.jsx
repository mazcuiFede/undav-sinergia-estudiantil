import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper, Stack, Typography } from '@mui/material'
import { UNIVERSIDAD, TECNOLOGIA, TRABAJO } from './../../constants/tipoDuda'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import dudasService from '../../services/dudas.service';

const HacerPregunta = props => {
    const [showAlert, setShowAlert] = React.useState(false)

    const [tipoDuda, setTipoDuda] = React.useState("");
    const handleChangeTipoDuda = (event) => {setTipoDuda(event.target.value);};
    
    const [titulo, setTitulo] = React.useState("");
    const handleChangeTitulo = (event) => {setTitulo(event.target.value);};

    const [descripcion, setDescripcion] = React.useState("");
    const handleChangeDescripcion = (event) => {setDescripcion(event.target.value);};

    const [tags, setTags] = React.useState("");
    const handleChangeTags = (event) => {setTags(event.target.value);};

    const guardarDuda = () => {
        dudasService.guardarDuda(titulo, descripcion, tags, tipoDuda).then(
            response => {
                setTipoDuda("")
                setTitulo("")
                setDescripcion("")
                setTags("")
                setShowAlert(true)
            },
            error => {

            }
        );
    }

    

    return (
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" paragraph={true}>Hacer una pregunta</Typography>
                    <Typography>A continuación, podes dejar tu duda para que tus compañer@s puedan ayudarte</Typography>
                </Grid>
                <Grid align='center' mb={3} mt={2} item xs={12}>
                    <Paper elevation={10} style={{ padding: 20, width: 600, margin: "10px auto"}}>
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
                            <TextField onChange={handleChangeTitulo} value={titulo} id="titulo" label="Titulo" variant="outlined" />
                            <TextField onChange={handleChangeDescripcion} value={descripcion} id="descripcion" label="Descripcion" variant="outlined" multiline rows={4}/>
                            <TextField onChange={handleChangeTags} value={tags} id="tags" label="Tags" variant="outlined" helperText="Ingrese los tags separados por espacios" />
                            
                            {
                                showAlert ? 
                                <Alert variant="outlined" severity="success">
                                    Tu pregunta fue registrada correctamente
                                </Alert>
                                :
                                ""
                            }
                            

                            <Button variant="contained" onClick={guardarDuda}>Guardar Duda</Button>
                            
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
    )
}

HacerPregunta.propTypes = {

}

export default HacerPregunta
