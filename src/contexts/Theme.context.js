import React, { createContext, useEffect } from 'react';
import useToggleState from '../hooks/useToggleState';
import {withGetScreen} from 'react-getscreen'

export const ThemeContext = createContext();
export const NavbarContext = createContext();
export const IsMobileViewContext = createContext();

function ThemeContextProvider(props) {
    const [isDarkMode, setIsDarkMode] = useToggleState(true);
    const [navFocus, setNavFocus] = useToggleState(false);
    let openWidth = props.isMobile() ? '53px' : '240px';
    let closeWidth = props.isMobile() ? '53px' : '73px';
    let navWidth = navFocus ? openWidth : closeWidth;
    let isMobile = props.isMobile();
    let IsTablet = props.isTablet();
    return(
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme: setIsDarkMode }}>
            <NavbarContext.Provider value={{ navFocus, toggleNavFocus: setNavFocus, navWidth }}>  
                <IsMobileViewContext.Provider value={{isMobile, IsTablet}} >
                    {props.children}
                </IsMobileViewContext.Provider>
            </NavbarContext.Provider>
    </ThemeContext.Provider>
    )
}

export default withGetScreen(ThemeContextProvider);