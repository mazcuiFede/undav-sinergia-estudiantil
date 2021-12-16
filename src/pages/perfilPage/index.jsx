import React, {useState } from 'react'
import PropTypes from 'prop-types'
import UserProfile from 'react-user-profile'
import Perfil from './components/perfil'
import Comentarios from './components/comentarios'


const PerfilPage = props => {
    return(
        <>
            <Perfil />
            <Comentarios />
        </>
    )
  
}

PerfilPage.propTypes = {

}

export default PerfilPage
