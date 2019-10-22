import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import styles from './styles/PaperContainer';



function PaperContainer(props) {
    return (
        <Paper className={props.classes.root}>
            {props.children}
        </Paper>
    );

}

export default withStyles(styles)(PaperContainer);