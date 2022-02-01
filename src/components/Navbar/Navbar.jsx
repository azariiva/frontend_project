import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import {
    AppBar,
    Toolbar,
    Link as MUILink,
    Typography,
    Container,
    TextField,

} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./navbarStyles";
import category from "../../store/category";

const Navbar = () => {
    const [searchText, setSearchText] = React.useState("");

    const classes = useStyles();

    React.useState(() => {
        fetch("https://demo-api.vsdev.space/api/categories")
            .then((res) => res.json())
            .then((data) => {
                category.setCategories(data);
            })
    }, []);

    const search = () => {
        console.log(searchText);
        setSearchText("");
    };

    return (
        <AppBar color='success' position="static">
            <Container
                fixed
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Toolbar disableGutters>

                    <MUILink
                        style={{ marginLeft: "10px" }}
                        component={Link}
                        to="/"
                        className={classes.navLink}
                    >

                    </MUILink>
                    <MUILink
                        style={{ marginLeft: "10px", display: 'flex' }}
                        component={Link}
                        to="/"
                        className={classes.navLink}
                    >
                        <img src={logo} alt="logo" height="64px" width="64px" />
                    </MUILink>
                </Toolbar>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <TextField id="outlined-basic" label="Поиск" variant="outlined" />
                </div>
            </Container>
        </AppBar>
    );
};

export default Navbar;
