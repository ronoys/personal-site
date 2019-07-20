import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '../components/Grid'


const useStyles = makeStyles({
  card: {
    //minWidth: 275,
    width: 300,
    
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  main: {
    position:'absolute',
    width:'1200px',
    height:'240px',
    border:'1px solid black',
    padding:'50px',
    float: 'right',    

  },

  tile : {
    padding: '200px',
    
  },

    
});

export default function SimpleCard() {
  const classes = useStyles();
  
  return (
    <div id="main">
      <Grid></Grid>
        <div id="tile" style={{display: 'inline-block', padding: '20px'}}>
                <Card className={classes.card} style={{height: '250px', padding: '10px' }}>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Project
                </Typography>
                <Typography variant="h5" component="h2">
                Project1
                </Typography>
                
                <Typography variant="body2" component="p">
                Text for project
                
                </Typography>
                </CardContent>
            
                 </Card>

                 

        </div>

        <div id="tile" style={{display: 'inline-block', padding: '20px'}}>

                <Card className={classes.card} style={{height: '250px', padding: '10px' }}>

                <CardContent>

                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Project
                </Typography>

                <Typography variant="h5" component="h2">
                Project2
                </Typography>
                
                <Typography variant="body2" component="p">
                Text for project
                </Typography>

                </CardContent>
            
                </Card>

        </div>

        <div id="tile" style={{display: 'inline-block', padding: '20px'}}>

                <Card className={classes.card} style={{height: '250px', padding: '10px' }}>

                <CardContent>

                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Project
                </Typography>

                <Typography variant="h5" component="h2">
                Project2
                </Typography>
                
                <Typography variant="body2" component="p">
                Text for project
                </Typography>

                </CardContent>
            
                </Card>

        </div>

        <div id="tile" style={{display: 'inline-block', padding: '20px'}}>

                <Card className={classes.card} style={{height: '250px', padding: '10px' }}>

                <CardContent>

                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Project
                </Typography>

                <Typography variant="h5" component="h2">
                Project2
                </Typography>
                
                <Typography variant="body2" component="p">
                Text for project
                </Typography>

                </CardContent>
            
                </Card>

        </div>

        <div id="tile" style={{display: 'inline-block', padding: '20px'}}>

                <Card className={classes.card} style={{height: '250px', padding: '10px' }}>

                <CardContent>

                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Project
                </Typography>

                <Typography variant="h5" component="h2">
                Project2
                </Typography>
                
                <Typography variant="body2" component="p">
                Text for project
                </Typography>

                </CardContent>
            
                </Card>

        </div>

        <div id="tile" style={{display: 'inline-block', padding: '20px'}}>

                <Card className={classes.card} style={{height: '250px', padding: '10px' }}>

                <CardContent>

                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Project
                </Typography>

                <Typography variant="h5" component="h2">
                Project2
                </Typography>
                
                <Typography variant="body2" component="p">
                Text for project
                </Typography>

                </CardContent>
            
                </Card>

        </div>



    
    </div>
  );
}