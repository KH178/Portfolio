import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import {ThemeContext, NavbarContext} from '../contexts/Theme.context';

export default function springAnime() {
    // const { isDarkMode } = useContext(ThemeContext);
    // const { navFocus, navWidth } = useContext(NavbarContext);
    return (
        <h1>d</h1>
    )
 }
//       export const homeContainer = useSpring({
//         config: {
//             duration: 350,  
//             precision: 0.01
//         },
//               display: 'flex',
//               flexDirection: 'column',
//               flexWrap: 'wrap',
//               justifyContent: 'center',
//               alignItems: 'center',
//               alignContent: 'center',
//               marginLeft: `${navFocus ? navWidth : '0px'}`,
//               height: '100vh',
//               width: `${navFocus ? `calc(100% - ${navWidth})` : 'calc(100% - 0px)'}`,
//             //   width: '100%',
//               position: 'absolute',
//               backgroundColor: navFocus ? isDarkMode ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.9)' : isDarkMode  ? 'rgba(0,0,0,.1)' : 'rgba(255,255,255,.1)',
//               perspective: '1000px',
//               clipPath: navFocus ? 'polygon(10% 20% , 100% 0%, 100% 100% , 10% 80% )': 'polygon(0% 0% , 100% 0%, 100% 100% , 0% 100% )' ,
//               boxShadow: '-13px 15px 11px 12px #854589 !important' ,
//               from: {
              
//               }
//    })
