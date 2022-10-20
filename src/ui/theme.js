import { createTheme } from '@mui/material/styles'
import { esES } from '@mui/material/locale'

export const theme =
    createTheme({
        palette: {
            mode: 'dark',
            primary: {
                light: '#80d6ff',
                main: '#42a5f5',
                dark: '#0077c2',
                contrastText: '#fff',
            },
        },
        components: {
            MuiTextField: {
                defaultProps: {
                    variant: "outlined",
                    fullWidth: true
                },
            },
            MuiButton: {
                defaultProps: {
                    variant: "contained",
                    color: "primary",
                },
            },
            MuiDialogTitle: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#833",
                        color: "white"
                    },
                }
            },
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: 'black',
                            color: "white"
                        },
                        '& .MuiDataGrid-iconSeparator': {
                            display: "none"
                        },
                        '& .Mui-error': {
                            backgroundColor: '#ff9191',
                        }
                    }
                }
            }
        },
    }, esES)