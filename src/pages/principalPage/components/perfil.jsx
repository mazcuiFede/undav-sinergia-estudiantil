import React from "react"
import Moment from "moment"
import { Avatar, Grid } from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import PersonIcon from "@mui/icons-material/Person"
import EventAvailableIcon from "@mui/icons-material/EventAvailable"
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar"

const Perfil = ({ user }) => {
  return (
    <Grid container bgcolor="#efefef" mt={3} p={3}>
      <Grid item xs={6} align="right">
        <Avatar
          alt={user.name}
          src={user.avatarUrl}
          sx={{ width: 150, height: 150 }}
        />
      </Grid>
      <Grid item xs={6}>
        <List dense={true}>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={`${user.nombre} ${user.apellido}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary={user.carrera} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EventAvailableIcon />
            </ListItemIcon>
            <ListItemText
              primary={`Fecha registro: ${Moment(user.signupDate).format(
                "YYYY-MM-DD"
              )}`}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary={`Número de Documento: ${user.documento}`} />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

Perfil.propTypes = {}

export default Perfil
