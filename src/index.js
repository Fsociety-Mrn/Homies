import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import './index.css'

const theme = createTheme({

  // for default color Typography
  typography: {
    "fontFamily": 'sans-serif',
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    allVariants: {
      color: '#000000'
    }
  },

  palette: {

    // for background
    background: {
      default: '#e7e5d6b5', // Set your desired background color here
    },
    
    // for chane to default color
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    },

    info: {
      main: '#F7C873',
    },
    text:{
      primary: "#000000",
      disabled: '#000000'
    },
    error:{
      main: '#c71e1e',
    },
    warning:{
      main: '#ff8c00'
    },
    success:{
      main: '#32cd32'
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CssBaseline />
    <ThemeProvider theme={theme}>

      <Box sx={{ backgroundColor: '#F9F9F5', minHeight: '100vh' }}>
        <App />
        </Box>

    </ThemeProvider>
  </React.StrictMode>
);
// background: 'linear-gradient(to right, rgb(11, 131, 120) 0%, rgb(85, 98, 112) 100%)'
