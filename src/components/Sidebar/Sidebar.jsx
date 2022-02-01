import React from 'react';
import { Link } from "react-router-dom";
import { Link as MUILink, Typography } from "@mui/material";
import { useStyles } from "./sidebarStyles";
const Sidebar = () => {

    const classes = useStyles();

    return (
        <div style={{ position: 'absolute', left: '0', top: '0', height: '100vh', width: '250px', color: 'black' }}>
            <MUILink
                component={Link}
                to="/"
                className={classes.navLink}
            >
                <Typography style={{ margin: 'auto 0' }} variant="h6">Главная</Typography>
            </MUILink>
            <MUILink
            
                component={Link}
                to="/news"
                className={classes.navLink}
            >
                <Typography style={{padding: '30px 0'}} variant="h6">Новости</Typography>
            </MUILink>
            <MUILink
                component={Link}
                to="/gallery"
                className={classes.navLink}
            >
                <Typography variant="h6">Галлерея</Typography>
            </MUILink>
        </div >
    );
};

export default Sidebar;