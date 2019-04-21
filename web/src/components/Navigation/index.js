import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

//1. Import React Router 
import { Link } from 'react-router-dom';

// 2. Import Routes from router 
import * as ROUTES from '../../constants/routes';


// Styling for the Navigation Component
const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    list: {
        width: 250,
    },
    navlink: {
        color: '#ffffff',
        textDecoration: "none"
    }
    
  };

// Navigation Component with all the routes
  class Navigation extends React.Component{
  
     state = {
          left: false
     };
     
     toggleDrawer = (side, open) => () =>{
         this.setState({
             [side]: open,
         });
     }
   render(){
    const { classes } = this.props;
    
    const sideList = (
            <div className={classes.list}>
               <List>
               <Link  to={ROUTES.LANDING}> 
                    <ListItem button>
                          <ListItemIcon>
                               <HomeIcon />
                          </ListItemIcon>
                          <ListItemText primary="Home"/>
                    </ListItem>
                </Link>
                    <ListItem button>
                          <ListItemIcon>
                                <HomeIcon />
                          </ListItemIcon>
                         <ListItemText primary="All Posts" />
                    </ListItem>
                    <ListItem button>
                          <ListItemIcon>
                                <HomeIcon />
                          </ListItemIcon>
                         <ListItemText primary="Add Post" />
                    </ListItem>
               </List>

            </div>
    );
    
    return(
        <div className={classes.root}>
        <AppBar position="static">
           <Toolbar>
               <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                 <MenuIcon />
               </IconButton>
               <Typography variant="h5" color="inherit" className={classes.grow}>
                 Fireact
               </Typography>
            <Button color="inherit"> <Link to={ROUTES.SIGN_IN} className={classes.navlink}> Login</Link></Button>
           </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={this.state.left} onClose={this.toggleDrawer('left', false)}>
           <div 
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left',false)}
              onKeyDown={this.toggleDrawer('left', false)}
              >
              {sideList}      
           </div>
        </Drawer>
    </div>
    );
}
  } // End of class
Navigation.propTypes ={
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Navigation);
