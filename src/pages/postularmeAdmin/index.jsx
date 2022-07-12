import React, { useState } from "react"
import { Button, Grid, Paper, Avatar, Typography, Box } from "@mui/material"
import logo from "../../assets/img/logo.png"
import sessionService from "../../services/session.service"
import Alert from "@mui/material/Alert"

const PostularmeAdmin = (props) => {
  const [postulacionMsg, setPostulacionMsg] = useState("")

  const postularme = () => {
    sessionService.updateUserStatus("postulado").then(
      (response) => {
        setPostulacionMsg("Tu postulación fue procesada con éxito.")
      },
      (error) => {}
    )
  }

  return (
    <Grid>
      <Paper
        elevation={10}
        style={{ padding: 20, width: 650, margin: "10px auto" }}
      >
        <Grid align="center" mb={3}>
          <Avatar
            alt="UNDAV"
            src={logo}
            sx={{ width: 280, height: 184 }}
            variant="rounded"
          />
        </Grid>
        <Grid>
          <Typography paragraph={true}>Estimad@s:</Typography>
          <Typography paragraph={true}>
            Les damos la bienvenida a la pantalla de Postulación para
            Administrador. <br />
            Es importante destacar que nuestros administradores analizarán tu
            postulación y podrá ser aprobada o rechazada. Dicho análisis tendrá
            en cuenta la diversidad de género, edad, carrera, etc. de los
            actuales administradores para formar un equipo variado.
          </Typography>
          <Typography paragraph={true}>
            Les dejamos la posibilidad de postularse en el siguiente botón:
          </Typography>
          <Box mt={4} mb={3}>
            <Typography align={"center"}>
              {postulacionMsg.length === 0 ? (
                <Button variant="contained" onClick={postularme}>
                  ¡Quiero postularme como administrador/a!
                </Button>
              ) : (
                <Alert severity="success">{postulacionMsg}</Alert>
              )}
            </Typography>
          </Box>
        </Grid>
      </Paper>
    </Grid>
  )
}

PostularmeAdmin.propTypes = {}

export default PostularmeAdmin
