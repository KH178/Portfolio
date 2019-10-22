import React from 'react';
import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Background from './Background';
import ThemeToggler from './ThemeToggler';
import useToggleState from './hooks/useToggleState';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Routes from './routes';
import { ThemeContextProvider } from './contexts/Theme.context';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { ThemeContext } from './contexts/Theme.context';
 

function customTheme(props) {
    const [theme, setTheme] = useState({
    palette: {
      type: "dark"
    }
   });
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
 
  // we change the palette type of the theme in state
  const toggleDarkTheme = () => { 
    setIsDarkMode();
    let newPaletteType = !isDarkMode ? "dark" : "light";
  
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  const scrollToNext = () => {
    props.history.push('/about')
  }

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);
    return (
        <div>
            
        </div>
    );

}
    export default customTheme;