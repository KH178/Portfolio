import React, {useEffect,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useSpring, animated, config } from 'react-spring';
import { ThemeContext, IsMobileViewContext } from './contexts/Theme.context';
import DivContainer from './divContainer'
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    scriptBox: {
    // willChange: width, height, left, top,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            
        },
    },
    aboutMeContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center'

    },
    paper1: {
        padding: theme.spacing(1, 1),
        margin: theme.spacing(1, 1),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            height: '30%'
        },
        [theme.breakpoints.down('xs')]: {
            height: '100%',
            width: '100%',
        },
    },
    avatar: {
        width: '50%',
        height: '50%',
        [theme.breakpoints.down('md')]: {
            height: '70%',
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            height: '50%',
            width: '50%'
        },
        [theme.breakpoints.down('xs')]: {
            // height: '100%',
            // width: '100%',
        },
    },
    paper2: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(3, 2),
        [theme.breakpoints.down('md')]: {
            height: '100%',
            margin: theme.spacing(1, 1),
            padding: theme.spacing(1, 1),
            overflow: 'hidden'
        },
    },
    nameHeading: {
         [theme.breakpoints.down('sm')]: {
           fontSize: '0.8rem'
         },
    },
    avatarMe: {
        width: '100%',
        height: '100%'
    },
    logo: {
        width: '50px',
        height: '50px',
        color: 'red',
        width: 'calc(100% /9)'
    },
    iconContainer: {
        width: '100%'
    }
    
}));


function About(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const { isMobile } = useContext(IsMobileViewContext);
    const classes = useStyles();
    const item = useSpring({
        config: config.wobbly,
        // clipPath: navFocus ? 'polygon(10% 20% , 100% 0%, 100% 100% , 10% 80% )' : 'polygon(0% 0% , 100% 0%, 100% 100% , 0% 100% )',
        from: { left: '0%', top: '0%', width: '0%', background: !isDarkMode ? 'rgba(0,0,0,.1)' : 'rgba(255,255,255,.1)' },
        to: async next => {
        await next({ top: '0%',width: !isMobile ? '80%' : '100%' , background: !isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,.1)' })
    },
    })

    return (
        <DivContainer className={classes.heigth}>
            <animated.div className={classes.scriptBox} style={item}>

            <Grid container className={classes.aboutMeContainer}>
                <Grid item lg={4} md={3} sm={12}>
                    <Paper className={classes.paper1} elevation={2}>
                        <Avatar className={classes.avatar} ><img src='./logo/13275978711548234974.svg' alt="Avatar" className={classes.avatarMe}/> </Avatar>
                    </Paper>
                </Grid>
                <Grid item lg={8} md={9} sm={12} >
                    <Paper className={classes.paper2} elevation={2}>
                        <Typography variant="h5" gutterBottom>About Karan</Typography>
                            <Typography variant="subtitle1" gutterBottom className={classes.nameHeading}>
                                Hi, I am a 23 years old Web developer based in Delhi, India.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </Typography>
                    </Paper>
                    <Paper className={classes.paper2} elevation={2}>
                        <div className={classes.iconContainer}>
                          <img src='./logo/html.svg' alt="LOGO" className={classes.logo} />    
                          <img src='./logo/css3.svg' alt="LOGO" className={classes.logo} />    
                          <img src='./logo/javascript-2.svg' alt="LOGO" className={classes.logo} />    
                          <img src='./logo/bootstrap-4.svg' alt="LOGO" className={classes.logo} />    
                          <img src='./logo/react-brands.svg' alt="LOGO" className={classes.logo} />    
                          <img src='./logo/node-brands.svg' alt="LOGO" className={classes.logo} />    
                          <img src='./logo/express-109.svg' alt="LOGO" className={classes.logo} />    
                          <img src='./logo/npm-brands.svg' alt="LOGO" className={classes.logo} />    
                          <img src='./logo/css3.svg' alt="LOGO" className={classes.logo} />    
                        </div>            
                    </Paper>
                    </Grid>
            </Grid>

            </animated.div>
        </DivContainer>
    );

}
    export default About;