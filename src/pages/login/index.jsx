import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, Avatar, TextField, FormControlLabel } from '@mui/material'
import { Checkbox, Alert } from '@mui/material'
import logo from '../../assets/img/odin.png'
import loginService from '../../services/login.service'
import tokenService from '../../services/token.service'

export const LoginPage = () => {

    const [userData, setUserData] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
        if (loggedUserJSON) {
          const userLogged = JSON.parse(loggedUserJSON)
          setUserData(userLogged)
          tokenService.setToken(userLogged.accessToken)
          redirectToHomePage();
        }
      }, [])

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const userLogin = await loginService.login({
            email,
            password
            })

            window.localStorage.setItem(
            'loggedAppUser', JSON.stringify(userLogin)
            )

            tokenService.setToken(userLogin.accessToken)
            setUserData(userLogin)
            setEmail('')
            setPassword('')
            if (userLogin.user.rol === 'cobranzas') {
                redirectToClientsPage();
            }
            else {
                redirectToCollections();
            }
        } catch(e) {
            setFormError(true)
            setTimeout(() => {
            setFormError(false)
            }, 3000)
            setEmail('')
            setPassword('')
        }
        }

    const redirectToClientsPage = () => {
        navigate("/colocacion");
    }

    const redirectToHomePage = () => {
        navigate("/home");
    }

    const redirectToCollections = () => {
        navigate("/cobros");
    }

    return (
    <Grid>
        <Paper elevation={10} style={{ padding: 20, height: 350, width: 350, margin:"90px auto"}}>
            <Grid align='center'>
                    <Avatar alt="Odin" src={logo} sx={{width: 200, height: 120}} />
            </Grid>
            <Grid>
                <TextField placeholder='Usuario' type="text" value={email} onChange={({target}) => setEmail(target.value)} margin="dense" fullWidth required/>
                <TextField placeholder='Contraseña' type='password' value={password} onChange={({target}) => setPassword(target.value)} margin="dense" fullWidth required/>
            </Grid>
            <Grid>
                <FormControlLabel
                    control={<Checkbox name="check" color="primary" />}
                    label="Recordarme"
                />
            </Grid>    
            { formError ? 
            <Alert style={{ backgroundColor: "#FF6B6B" }} variant="filled" severity="success">
                Credenciales Invalidas
            </Alert>
            :
            <Button type='submit' onClick={handleLogin} color='primary' variant="contained" size="medium">Iniciar Sesion</Button>
            }
        </Paper>
    </Grid>
    )
}
