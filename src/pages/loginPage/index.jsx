import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, Avatar, TextField, FormControlLabel } from '@mui/material'
import { Checkbox, Alert } from '@mui/material'
import logo from '../../assets/img/logo.png'
import loginService from '../../services/session.service'
import { Link } from "react-router-dom";

const LoginPage = () => {

    const [documento, setDocumento] = useState("");
    const [password, setPassword] = useState("");
    const [formErrorMessage, setFormErrorMessage] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("token")
      }, [])

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            await loginService.login(
                documento,
                password
            ).then(
                response => {
                    debugger
                    if(response.token){
                        localStorage.setItem('token', response.token)
                        navigate("/principal");
                    }
                    else{
                        setFormErrorMessage(response.msg)
                        setTimeout(() => {
                            setFormErrorMessage("")
                        }, 3000)
                        setDocumento('')
                        setPassword('')
                    }
                },
                error => {
    
                }
            )

        } catch(e) {
            setFormErrorMessage("Hubo un error")
            setTimeout(() => {
                setFormErrorMessage("")
            }, 3000)
            setDocumento('')
            setPassword('')
        }
    }

    return (
    <Grid>
        <Paper elevation={10} style={{ padding: 20, width: 350, margin: "90px auto"}}>
            <Grid align='center' mb={3}>
                    <Avatar alt="UNDAV" src={logo} sx={{width: 280, height: 184}} variant="rounded"/>
            </Grid>
            <Grid>
                <TextField placeholder='Nro de Documento' type="text" value={documento} onChange={({target}) => setDocumento(target.value)} margin="dense" fullWidth required/>
                <TextField placeholder='Contrase??a' type='password' value={password} onChange={({target}) => setPassword(target.value)} margin="dense" fullWidth required/>
            </Grid>   
            <Grid align="middle" mt={3}>
                { formErrorMessage.length > 0 ? 
                <Alert style={{ backgroundColor: "#FF6B6B" }} variant="filled" severity="success">
                    {formErrorMessage}
                </Alert>
                :
                    <Button type='submit' onClick={handleLogin} color='primary' variant="contained" size="medium">Iniciar Sesion</Button>
                }
            </Grid>
            <Grid align='center' mb={3} mt={4}>
                A??n no tenes cuenta? <Link to="/registrarse">Registrate</Link>
            </Grid>
        </Paper>
    </Grid>
    )
}


LoginPage.propTypes = {

}

export default LoginPage