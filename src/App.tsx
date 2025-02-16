import React from 'react';
import AppRouter from "./route/AppRouter";
import {createTheme, ThemeOptions, ThemeProvider} from "@mui/material";
import Alert from "./components/alert/Alert";
import AuthProvider from "./provider/AuthProvider";

export const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4d19cc',
        }
    },
});

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={themeOptions}>
                <AppRouter/>
                <Alert/>
            </ThemeProvider>
        </AuthProvider>
    )
};
export default App;
