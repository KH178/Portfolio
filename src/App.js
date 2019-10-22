import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Background from './Background';
import ThemeToggler from './ThemeToggler';
import useToggleState from './hooks/useToggleState';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Routes from './routes';
import ThemeContextProvider from './contexts/Theme.context';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


function App(props) {
   const [theme, setTheme] = useState({
    palette: {
      type: "dark"
     },
   });

  const [ navFocus, setNavFocus ] = useToggleState(false);
  
  // we change the palette type of the theme in state
  const toggleDarkTheme = (isDark) => { 
    let newPaletteType = !isDark ? "dark" : "light";
  
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);



  
  // muiTheme = responsiveFontSizes(theme);

  
  const scrollDirection = (val) => {
    const paths = ['/', '/about', '/portfolio', '/blog', 'contact'];
    switch (val) {
      case 'down':
        return (paths.indexOf(props.location.pathname) + 1) !== undefined ? paths[paths.indexOf(props.location.pathname) + 1] : '/';
      case 'up':
        return (paths.indexOf(props.location.pathname) - 1) !== undefined ? paths[paths.indexOf(props.location.pathname) - 1] : '/contact'
    }
  }
 

  


  return (
     < div >
      <MuiThemeProvider theme={muiTheme}>
          <ReactScrollWheelHandler
            upHandler={async() => await props.history.push(scrollDirection('up'))}
            downHandler={async () => await props.history.push(scrollDirection('down'))}
        >
          <ThemeContextProvider>
            < Navbar/>
            < Routes/>
             < ThemeToggler toggleDarkTheme={toggleDarkTheme} />
            < Background/>
            </ThemeContextProvider>
          </ReactScrollWheelHandler>
      </MuiThemeProvider>
      </div>
  );
}
// {props.history.push('/about') }
export default withRouter(App);
