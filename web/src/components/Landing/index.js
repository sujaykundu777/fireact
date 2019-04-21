import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      flexGrow: 1,
      ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
    },
});

class Landing extends Component {
    
  render() {
       const { classes } = this.props;
     return (
      <div className={classes.root}> 
        <Grid container spacing={24}>
           <Grid item xs={12}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="h5" component="h3">
                       Hello World
                </Typography>
                <Typography component="p">
                      This is a blog built using React, Material-UI and Firebase
              </Typography>
              </Paper> 
          </Grid>
        
        </Grid>
      </div>
    );
  }
}

Landing.propTypes ={
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
