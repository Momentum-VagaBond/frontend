import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#2af1b5',
        },
        secondary: {
            main: '#fe8a39',
        },
    },

    bgcolor: {
        primary: {
            main: '#e9ecef',
        }
    },

    overrrides: {
        Button: {
            color: '#2af1b5',
        },
    },


});