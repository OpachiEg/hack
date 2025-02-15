import React from 'react';
import AppRouter from "./route/AppRouter";
import {createTheme, ThemeOptions, ThemeProvider} from "@mui/material";
import Alert from "./components/alert/Alert";

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
        <ThemeProvider theme={themeOptions}>
            <AppRouter/>
            <Alert/>
        </ThemeProvider>
    )
};
export default App;
