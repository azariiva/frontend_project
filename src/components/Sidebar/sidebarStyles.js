import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    navLink: {
        color: "#000000 !important",
        position: 'relative',
        left: '120px',
        top: '200px',
        textDecoration: 'none !important',
        "&:hover": {
            color: "#000000",
            textDecoration: 'none',
        },
        "&:visited": {
            color: "#000000",
            textDecoration: 'none',
        },
    },
    search: {
        color: '#fff !important'
    },
    textField: {
    },
}));
