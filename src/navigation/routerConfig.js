import {Routes, Route} from 'react-router-dom'
import { ROOT, LOGIN, REGISTRARSE, PRINCIPAL, FORO_UNIVERSIDAD, FORO_TRABAJO, FORO_TECNOLOGIA, FORO_DUDA,
         EVENTOS, PERFIL, POSTULARME_ADMIN, CREAR_EVENTO, HACER_PREGUNTA } from './../constants/url'
import { Layout } from '../components/Layout'
import PrivateRoute from '../components/PrivateRoute';

import LoginPage from '../pages/loginPage'
import RegistrarsePage  from '../pages/registrarsePage'
import PrincipalPage  from '../pages/principalPage'
import ForoUniversidadPage from '../pages/foroUniversidadPage'
import ForoTrabajoPage from '../pages/foroTrabajoPage'
import ForoTecnologiaPage  from '../pages/foroTecnologiaPage'
import EventosPage  from '../pages/eventosPage'
import PerfilPage from '../pages/perfilPage'
import SubirContenidoPage from '../pages/subirContenidoPage'
import CrearEventoPage from '../pages/crearEventoPage'
import HacerPregunta from '../pages/hacerPregunta';
import PostularmeAdmin from '../pages/postularmeAdmin';
import DudaPage from '../pages/dudaPage'


export const RouterConfig = () => {
    return (
        <Routes>
            {/* <Route path={ROOT} element={<PrivateRoute><Layout /></PrivateRoute>}/> */}
            <Route path={LOGIN} element={<LoginPage />} />
            <Route path={REGISTRARSE} element={<RegistrarsePage />} />


            <Route path={ROOT} element={<Layout children={<PrincipalPage />}/>} />
            <Route path={PRINCIPAL} element={<Layout children={<PrincipalPage />}/>} />
            <Route path={FORO_UNIVERSIDAD} element={<Layout children={<ForoUniversidadPage />}/>} />
            <Route path={FORO_TRABAJO} element={<Layout children={<ForoTrabajoPage />}/>} />
            <Route path={FORO_TECNOLOGIA} element={<Layout children={<ForoTecnologiaPage />}/>} />
            <Route path={FORO_DUDA} element={<Layout children={<DudaPage />}/>} />
            
            <Route path={EVENTOS} element={<Layout children={<EventosPage />}/>} />
            <Route path={PERFIL} element={<Layout children={<PerfilPage />}/>} />
            {/* <Route path={SUBIR_CONTENIDO} element={<Layout children={<SubirContenidoPage />}/>} /> */}
            <Route path={CREAR_EVENTO} element={<Layout children={<CrearEventoPage />}/>} />
            <Route path={HACER_PREGUNTA} element={<Layout children={<HacerPregunta />}/>} />
            <Route path={POSTULARME_ADMIN} element={<Layout children={<PostularmeAdmin />}/>} />
            
        </Routes>
    )
}

export default RouterConfig