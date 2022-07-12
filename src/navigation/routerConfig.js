import { Routes, Route } from "react-router-dom"
import {
  ROOT,
  LOGIN,
  REGISTRARSE,
  PRINCIPAL,
  FORO_UNIVERSIDAD,
  FORO_TRABAJO,
  FORO_TECNOLOGIA,
  FORO_DUDA,
  EVENTOS,
  POSTULARME_ADMIN,
  HACER_PREGUNTA,
} from "./../constants/url"
import { Layout } from "../components/Layout"
import PrivateRoute from "../components/PrivateRoute"

import LoginPage from "../pages/loginPage"
import RegistrarsePage from "../pages/registrarsePage"
// import PrincipalPage from "../pages/principalPage"
// import ForoUniversidadPage from "../pages/foroUniversidadPage"
// import ForoTrabajoPage from "../pages/foroTrabajoPage"
// import ForoTecnologiaPage from "../pages/foroTecnologiaPage"
// import EventosPage from "../pages/eventosPage"
// import HacerPregunta from "../pages/hacerPregunta"
// import PostularmeAdmin from "../pages/postularmeAdmin"
// import DudaPage from "../pages/dudaPage"

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={REGISTRARSE} element={<RegistrarsePage />} />

      {/*      <Route path={ROOT} element={<PrivateRoute><Layout children={<PrincipalPage />}/></PrivateRoute>} />
            <Route path={PRINCIPAL} element={<PrivateRoute><Layout children={<PrincipalPage />}/></PrivateRoute>} />
            <Route path={FORO_UNIVERSIDAD} element={<PrivateRoute><Layout children={<ForoUniversidadPage />}/></PrivateRoute>} />
            <Route path={FORO_TRABAJO} element={<PrivateRoute><Layout children={<ForoTrabajoPage />}/></PrivateRoute>} />
            <Route path={FORO_TECNOLOGIA} element={<PrivateRoute><Layout children={<ForoTecnologiaPage />}/></PrivateRoute>} />
            <Route path={FORO_DUDA} element={<PrivateRoute><Layout children={<DudaPage />}/></PrivateRoute>} />
            
            <Route path={EVENTOS} element={<PrivateRoute><Layout children={<EventosPage />}/></PrivateRoute>} />
            <Route path={HACER_PREGUNTA} element={<PrivateRoute><Layout children={<HacerPregunta />}/></PrivateRoute>} />
            <Route path={POSTULARME_ADMIN} element={<PrivateRoute><Layout children={<PostularmeAdmin />}/></PrivateRoute>} /> */}
    </Routes>
  )
}

export default RouterConfig
