import React, {useContext} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ThemeContext, NavbarContext } from './contexts/Theme.context'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import WorkOutlineTwoToneIcon from '@material-ui/icons/WorkOutlineTwoTone';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import { NavLink } from 'react-router-dom';

let drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      // duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  navLinks: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex'

  },
  activeLink: {
    '& svg': {
      color: 'red',
    },
    color: 'red',
  }
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const {toggleNavFocus, navWidth } = useContext(NavbarContext);
  const [open, setOpen] = React.useState(false);

  let drawerWidth = navWidth;
  const classes = useStyles({drawerWidth, });

  const handleDrawerOpen = () => {
    setOpen(true);
    toggleNavFocus();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    toggleNavFocus()
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <Divider />
        <List>
          {
            [{
              text: 'Home',
              icon: < HomeTwoToneIcon/ > ,
              link: '/'
            }, {
              text: 'About',
              icon: < AccountCircleTwoToneIcon/ > ,
              link: '/about'
            }, {
              text: 'Portfolio',
              icon: < WorkOutlineTwoToneIcon />,
              link: '/portfolio'
            }].map((item, index) => (
              < NavLink exact activeClassName={classes.activeLink} className={classes.navLinks} to={item.link} key={item.text}>
            <ListItem button >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
                </ListItem>
                </NavLink>
          ))}
        </List>
        <Divider/>
        <List>
          {[{ text: 'Blog', icon: <EmojiPeopleTwoToneIcon /> }, { text: 'Contact', icon: <ContactMailTwoToneIcon /> }].map((item, index) => (
            < NavLink exact activeClassName={classes.activeLink} className={classes.navLinks} to={`/${item.text.toLowerCase()}`} key={item.text}>
            <ListItem button >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              </ListItem>
              </ NavLink>
          ))}
        </List>
      </Drawer>
    </div>
  );
}





// import React, { useContext } from 'react';
// import {ThemeContext,NavbarContext} from './contexts/Theme.context'
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
// import MenuIcon from '@material-ui/icons/Menu';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import { NavLink } from 'react-router-dom';
// import { useSpring, animated } from 'react-spring'

// const useStyles = makeStyles((theme, navWidth) => ({
//   navbarContainer: {
//     // flexGrow: 1,
//     position: 'absolute',
//     top: '0',
//       transition: 'width .4s'
    
//   },
//   nav: {
//     // position: 'absolute',
//     height: '100vh',
    
 
//   },
//   menuButton: {
//     // marginRight: theme.spacing(2),
//   },
//   navLinks: {
//     // position: 'absolute',
//     fload: 'left',
//     display: 'inline-block',
//     marginBottom: '20vh',
//     marginTop: '50%'
//     // margin: theme.spacing(3)
//   },
//   activeLink: {
//     color: 'inherit',
//     textDecoration: 'none'
//   }
// }));

// export default function Navbar() {
//   const classes = useStyles();
//   const { navFocus, toggleNavFocus, navWidth } = useContext(NavbarContext);
//   const { isDarkMode } = useContext(ThemeContext);
//   console.log(isDarkMode);
  
//   const handleNavFocus = () => {
//     if (!navFocus) return toggleNavFocus();  
//   }
//    const handleNotNavFocus = () => {
//      if (navFocus) return toggleNavFocus();
//    }
  

//   return (
//     <div className={classes.navbarContainer} style={{width: navWidth}}>
//       <AppBar position="static" color='inherit' className={classes.nav} >
//         <Toolbar variant="dense">
//           <List >
//             < NavLink exact activeClassName={classes.activeLink} className={classes.navLinks} to='/'><ListItem onMouseEnter={handleNavFocus} onMouseLeave={handleNotNavFocus}><HomeRoundedIcon fontSize='large' /> {navFocus ? <ListItemText primary={'Home'} /> : ''}</ListItem></NavLink>
//               < NavLink exact activeClassName={classes.activeLink} className={classes.navLinks} to='/about'><ListItem  onMouseEnter={toggleNavFocus} onMouseLeave={toggleNavFocus}><PermIdentityRoundedIcon/><ListItemText primary={'About'} /></ListItem></NavLink>
//               < NavLink exact activeClassName={classes.activeLink} className={classes.navLinks} to='/portfolio'><ListItem  onMouseEnter={toggleNavFocus} onMouseLeave={toggleNavFocus}><PermIdentityRoundedIcon/><ListItemText primary={'Portfolio'} /></ListItem></NavLink>
//         </List>
//         </Toolbar>
//         </AppBar>
//     </div>
//   );
// }

     