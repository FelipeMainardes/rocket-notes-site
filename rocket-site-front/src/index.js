import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/global';
import reportWebVitals from './reportWebVitals';
import theme from './styles/theme';
import {Details} from './pages/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyles/>
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
