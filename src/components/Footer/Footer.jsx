import React from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./footerStyles";

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h6" >
                
                <a href="https://github.com/azariiva" rel="noreferrer" target="_blank"
                style={{color: '#fff', marginRight: '30px'}} className={classes.navLink}>
                    Искандер Зарипов
                </a>
                201-327
            </Typography>
        </footer>
    );
};

export default Footer;
