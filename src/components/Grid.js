import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          
            <Grid>
              <Card>
                <CardContent>
                
                <Typography variant="p" component="p">
                Random Forest Classifier
                
                </Typography>

                <Typography variant="p" component="p">
                to Predict 
                Teen Transportation Safety
                
                </Typography>
                
                <Typography variant="body2" component="p">
                Text for project
                
                </Typography>
                </CardContent>
            
                </Card>
              
            </Grid>

            
          
        </Grid>
      </Grid>

      
      
    </Grid>
  );
}