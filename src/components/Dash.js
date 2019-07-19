import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import logo from './team.jpg'
import { AutoComplete } from 'material-ui';


const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        //position: 'fixed',
        padding: theme.spacing(5, 5), 
        width: '1000px',
        marginRight: '100px',
        marginLeft: '0px',
        
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
      <Paper className={classes.root} elevation='10' square={false}>
        <img src={logo} alt="Logo" height="200px"/>
        <p>We are a group of highly motivated stem students</p>

      </Paper>

      <Paper className  ={classes.chatBox}>
        
      </Paper>

      
    </div>
  );

}
