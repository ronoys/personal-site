import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import sample from './download.png'

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

export default function Dash() {

    const classes = useStyles();

    return (
    <div align="center">
      <Paper className={classes.root} elevation='10' square={false}>
        <h1>Insert Project Title</h1>
        <img src={sample} alt="Logo" height="200px" width="200px"/>
        <p>Insert Description Here</p>

      </Paper>

      
      
    </div>
  );

}
