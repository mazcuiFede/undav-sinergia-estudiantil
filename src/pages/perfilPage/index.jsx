import React, { useEffect, useState } from 'react'
import sessionService from '../../services/session.service'
import Perfil from './components/perfil'
import Comentarios from './components/comentarios'


const PerfilPage = props => {
    
    const [user, setUser] = useState(null)

    useEffect(() => {
        sessionService.getUserData().then(
          response => {
            setUser(response.user)
          }
        )
      }, [])

    return(
        <>
            {
                user ? 
                <Perfil user={user}/>
                :
                "Cargando..."
            }
            {/* <Comentarios /> */}
        </>
    )
  
}

PerfilPage.propTypes = {

}

export default PerfilPage
