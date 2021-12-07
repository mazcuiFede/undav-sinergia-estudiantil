import { HomePage } from "../pages/home";
import { CollectionsPage } from "../pages/collections";

export const PagesToRender = {
    '/home': <HomePage/>,
    '/colocacion': ['colocacion'],
    '/cobros': [<CollectionsPage/>],
    '/cx': ['cx'],
    '/tesoreria': ['tesoreria'],
    '/ajustes/policies': ['ajustes', 'Policies'],
    '/ajustes/network': ['ajustes', 'Network']
};
