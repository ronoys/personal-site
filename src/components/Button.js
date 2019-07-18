import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  function myFunction() {
    //alert('The link was clicked.')
    document.getElementById("hello").value="billy";
  }


  return (
    <div>
      <Button variant="contained" className={classes.button} onClick={myFunction} id="button1">
        Default
      </Button>
      <p>Change me!</p>
      
      
    </div>


  );
}

