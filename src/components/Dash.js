import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(5, 5), 
        // width: '1000px',
        // height: '300px',
        // display: 'flex',
        // alignItems: 'center'
        
        
    },

    flex:{
        display: 'flex',
        alignItems: 'center'
    },

    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey',
    },

    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px'

    },

    chatBox: {
        width: '85%'
        

    },

    button: {
        width: '15%'
    },

  }));

export default function Dash() {

    const classes = useStyles();

    return (
    <div align="center">
      <Paper className={classes.root}>

      </Paper>

      <Paper className  ={classes.chatBox}>
        
      </Paper>
    </div>
  );

}