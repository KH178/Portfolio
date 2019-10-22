import React, {useContext} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSpring, animated} from 'react-spring'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {ThemeContext, NavbarContext} from './contexts/Theme.context';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import DivContainer from './divContainer'
// import {homeContainer} from './styles/springAnime'



const useStyles = makeStyles(theme => ({
    intro: {
        textAlign: 'center'
    },
    contentContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '50%',
         [theme.breakpoints.down('md')]: {
             width: '80%',
         },
         [theme.breakpoints.down('sm')]: {
             width: '90%',
         },
    },
    name: {
        [theme.breakpoints.down('md')]: {
            fontSize: '5rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
            letterSpacing: '0.3rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
            letterSpacing: '0.3rem'
        },
    },
    occu: {
        letterSpacing: '1.8rem',
        marginRight: '-1.8rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
            marginRight: '-1.5rem',
            letterSpacing: '1.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '-1rem',
             fontSize: '1rem',
              letterSpacing: '1rem',
         },
        [theme.breakpoints.down('xs')]: {
            marginRight: '-0.5rem',
             fontSize: '1rem',
              letterSpacing: '0.5rem',
         },
    },
    // rotateOnHover: {
    //     transform: 'rotateY(-40deg)',
    // }
    downArrow: {
        textAlign: 'center',
        marginTop: '10rem'
    }

}));

function Home(props) {
    // console.log(navFocus);
    const classes = useStyles();
    const { isDarkMode } = useContext(ThemeContext);
    // const { navFocus, navWidth } = useContext(NavbarContext);
    // const loopMe = props.location.pathname === '/' ; 1 : 0;

    let textShadowColor = {
        col1: isDarkMode ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.6)',
        col2: isDarkMode ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.15)',
    } 

    let paraShadowColor = {
        col1: isDarkMode ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.2)',
    }
    
    const name = useSpring({
        opacity: 1,
        textShadow: `4px 3px 0px ${textShadowColor.col1}, 9px 8px 0px ${textShadowColor.col2}`,
        perspective: '1000px',
        from: {
            opacity: 0,
            textShadow: '0px 0px 0px rgba(255,255,255,.6), 0px 0px 0px rgba(255,255,255,0.15)', 
        }
    })
       const occup = useSpring({
           textShadow: `3px 4px 0px ${paraShadowColor.col1}`, 
           transform: 'scale(1)',
           from: {
               textShadow: `0px 0px 0px rgba(255,255,255,.6)`,
               transform: 'scale(0.5)',
           }
       })
    
    // const downArrow = Keyframes.Spring({
    //      from: { transform: 'translateY(-100px)'},
    // to: async next => {
    //   while(1) {
    //     await next({ transform: 'translateY(0px)' })
    //     await next({ transform: 'translateY(10px)' })
    //   }
    // },
    // })


    return (
        <DivContainer>
            < CssBaseline />
            <div className={classes.contentContainer}>
            <animated.div style={name}>
                <Typography variant="h1" component="h1" gutterBottom className={classes.name}>
                    Karan Handa
                </Typography>
                </animated.div>
                    <animated.div style={occup} >
                <Typography variant="h5" component="h6" gutterBottom className={classes.occu}>
                    A Web Developer
                </Typography>
                    </animated.div>
                    <animated.div className={classes.downArrow}>
                      < ArrowDownwardSharpIcon fontSize='large' />
                </animated.div>
                </div>
         </DivContainer>
    );
}

    export default React.memo(Home);