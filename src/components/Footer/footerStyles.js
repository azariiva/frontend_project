import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#66BB6A',
        width: '100%',
        color: "#fff",
        height: '64px',
        marginTop: 'auto',
    },
    navLink: {
        color: "#ff7961",
        textDecoration: 'none',
        "&:hover": {
            color: "#ff7961",
            textDecoration: 'none',
        },
        "&:visited": {
            color: "#ff7961",
        },
    },
}));