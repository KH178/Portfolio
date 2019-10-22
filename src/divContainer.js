import React, { useCallback, useContext } from 'react';
import { ThemeContext, NavbarContext } from './contexts/Theme.context';
import { makeStyles } from '@material-ui/core';
import { useSpring, animated } from 'react-spring'

const useStyles = makeStyles(theme=>({
    homeContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        height: '100vh',
        position: 'absolute',
    }
}))


function DivContainer({ children, ...props }) {
    const { navFocus, navWidth } = useContext(NavbarContext);
    const { isDarkMode } = useContext(ThemeContext);

    const color1 = isDarkMode ? 'rgba(255,250,254,.9)' : 'rgba(0,0,0,.9)'
    const color2 = isDarkMode ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)'
   
    const classes = useStyles(navWidth);
    const parent = useSpring({
        backgroundColor: color2,
        perspective: '1000px',
        width: `calc(100% - ${navWidth})`,
        marginLeft: navWidth,
        transform: !navFocus ? 'scale(1)' : 'scale(0.8)',
        border: navFocus ? '10px solid ' + color1 : '0px solid rgba(255,255,255,.0)',
        ovarFlow: 'hidden',
        borderRadius: '5px 5px 5px 5px',

        // clipPath: navFocus ? 'polygon(10% 20%, 100% 0, 100% 100%, 10% 80%)' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        from: {
            // backgroundColor: 'inherit'
        }
})

        return (
            <animated.div color="inherit" className={classes.homeContainer} style={parent}>
                {children}
            </animated.div>
        );
}

export default DivContainer;