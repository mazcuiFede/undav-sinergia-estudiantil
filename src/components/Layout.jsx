import React, {useState, useEffect} from 'react'
import Breadcrumbs from '@trendmicro/react-breadcrumbs';
import ensureArray from 'ensure-array';
import styled from 'styled-components';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-breadcrumbs/dist/react-breadcrumbs.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { TextField, IconButton, Box } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@mui/icons-material/Home"
import CommentBankIcon from '@mui/icons-material/CommentBank';
import EmailIcon from '@mui/icons-material/Email';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { PagesToRender } from './PagesToRender'

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

export const Layout = () => {
    const [selected, setSelected] = useState('home')
    const [expanded, setExpanded] = useState(false)
    const navigate = useNavigate();

    const onSelect = (selected) => {
        navigate(selected);
        setSelected(selected);
    };
    const onToggle = (expanded) => {
        setExpanded(expanded);
    };

    const renderBreadcrumbs = () => {
        const list = ensureArray(PagesToRender[selected]);

        return (
            <Breadcrumbs>
                {list.map((item, index) => (
                    <Breadcrumbs.Item
                        active={index === list.length - 1}
                        key={`${selected}_${index}`}
                    >
                        {item}
                    </Breadcrumbs.Item>
                ))}
            </Breadcrumbs>
        );
    }

    const SearchButton = () => (
        <IconButton>
          <SearchIcon />
        </IconButton>
    )

    useEffect(() => {
        setSelected(window.location.pathname)
    }, [])

    return (
        <div>
            <div
                style={{
                    marginLeft: expanded ? 240 : 64
                }}
            >
            <Box sx={{display: 'flex', alignItems: 'flex-end'}} pt={1} pl={2} pr={2}>
                <TextField
                    fullWidth label="Buscar Cliente"
                    InputProps={{endAdornment: <SearchButton />}}
                />
            </Box>
            </div>
            <SideNav onSelect={onSelect} onToggle={onToggle}>
                <SideNav.Toggle />
                <SideNav.Nav selected={selected}>
                    <NavItem eventKey="/home">
                        <NavIcon style={{padding: "7px"}}>
                            <HomeIcon  />
                        </NavIcon>
                        <NavText title="Home">
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/colocacion">
                        <NavIcon style={{padding: "7px"}}>
                            <CommentBankIcon className="fa fa-fw fa-line-chart" />
                        </NavIcon>
                        <NavText title="Devices">
                            Colocacion
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/cobros">
                        <NavIcon style={{padding: "7px"}}>
                            <EmailIcon className="fa fa-fw fa-list-alt" />
                        </NavIcon>
                        <NavText title="Reports">
                            Cobros
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/cx">
                        <NavIcon style={{padding: "7px"}}>
                            <HeadphonesIcon className="fa fa-fw fa-list-alt" />
                        </NavIcon>
                        <NavText title="Reports">
                            CX
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/tesoreria">
                        <NavIcon style={{padding: "7px"}}>
                            <AccountBalanceIcon className="fa fa-fw fa-list-alt" />
                        </NavIcon>
                        <NavText title="Reports">
                            Tesoreria
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/ajustes">
                        <NavIcon style={{padding: "7px"}}>
                            <SettingsIcon className="fa fa-fw fa-cogs" />
                        </NavIcon>
                        <NavText title="Settings">
                            Ajustes
                        </NavText>
                        <NavItem eventKey="/ajustes/policies">
                            <NavText title="Policies">
                                Policies
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/ajustes/network">
                            <NavText title="Network">
                                Network
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <Main expanded={expanded}>
                {renderBreadcrumbs()}
            </Main>
        </div>
    );
}