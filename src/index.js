import React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/roboto';

import Pages from './pages';
import reportWebVitals from './reportWebVitals';

/*
import theme from './theme';
import {ThemeProvider as MuiThemeProvider, StylesProvider} from '@mui/styles';
import {ThemeProvider} from '@emotion/react'; */

ReactDOM.render(
    <React.StrictMode>
        <Pages/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
