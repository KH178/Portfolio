import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import IconButton from '@material-ui/core/IconButton';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import {ThemeContext} from './contexts/Theme.context';

const useStyles = makeStyles(muiTheme => ({
    themeIconBox: {
        position: 'absolute',
        top: '0',
        right: '0',
 }
}));


export default function ThemeToggler({toggleDarkTheme}) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    
    const classes = useStyles();
    return (
        <div className={classes.themeIconBox}>
            <IconButton onClick={() => { 
                toggleTheme()
                toggleDarkTheme(isDarkMode)
                }} color='inherit' >
                {
                    !isDarkMode ? < WbSunnyIcon/> : < Brightness2Icon/>
                }
             </IconButton>
        </div>
    );

}