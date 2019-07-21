import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        //position: 'fixed',
        padding: theme.spacing(5, 5), 
        width: '1000px',
        marginRight: '100px',
        marginLeft: '0px',
        
    },

    

    
  }));

export default function ContactForm() {

    const classes = useStyles();

    return (
    <div align="center">
        
      <Paper className={classes.root} elevation='10' square={false}>

        <h3>We are dedicated to our mission of helping the community while learning all the way. Please contact us at our email below with any project ideas</h3>

        <p>Email: cloudsystems@gmail.com</p>
        

      </Paper>

      

      
    </div>
  );

}
