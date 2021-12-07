import {Routes, Route} from 'react-router-dom'
import { ROOT, LOGIN, CLIENTS, COLLECTIONS } from './../constants/url'
import { LoginPage } from '../pages/login'
import { ClientsPage } from '../pages/clients'
import { CollectionsPage } from '../pages/collections'
import { Layout } from '../components/Layout'
import PrivateRoute from '../components/PrivateRoute';

export const RouterConfig = () => {
    return (
        <Routes>
            <Route path={ROOT} element={<PrivateRoute><Layout /></PrivateRoute>}/>
            <Route path={LOGIN} element={<LoginPage />} />
            <Route path={CLIENTS} element={<PrivateRoute><ClientsPage /></PrivateRoute>} />
            <Route path={COLLECTIONS} element={<PrivateRoute><CollectionsPage /></PrivateRoute>} />
        </Routes>
    )
}

export default RouterConfig