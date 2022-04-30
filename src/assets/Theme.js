import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#2af1b5',
        },
        secondary: {
            main: '#08d295',
        },
    },
    Button: {
        size: 'small',
        palette: {
            primary: {
                main: '#2af1b5',
            },
            secondary: {
                main: '#08d295',
            },
        },
    },
});