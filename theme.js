import { createTheme } from "@mui/material";

export const LTRtheme = createTheme({
    palette: {
        primary: {
            main: '#05B1BD',
            contrastText: '#fff'
        },
        secondary: {
            main: '#F7A605',
            contrastText: '#fff'
        },
        info: {
            main: '#fff',
            light: '#F2C577',
            dark: '#EDB24A',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0px', // Remove border radius
                },
            },
        },
    },
    direction: 'ltr',
    typography: {
        fontFamily: 'Outfit, sans-serif',
    },
})
export const RTLtheme = createTheme({
    palette: {
        primary: {
            main: '#05B1BD',
            contrastText: '#fff'

        },
        secondary: {
            main: '#F7A605',
            contrastText: '#fff'

        },
        info: {
            main: '#fff',
            light: '#F2C577',
            dark: '#EDB24A',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0px', // Remove border radius
                },
            },
        },
    },
    direction: 'rtl',
    typography: {
        fontFamily: 'Cairo, Arial, sans-serif',
    },
})