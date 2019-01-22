import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core';
import { AppName } from '../constants/app-name';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


const AppHeader = ({ withMenu, classes }) => (
  <AppBar position="static">
    <Toolbar>
      { withMenu &&
      <IconButton className={ classes.menuButton } color="inherit"
                  aria-label="Menu">
        <MenuIcon/>
      </IconButton>
      }
      <Typography variant="h6" color="inherit" >
        { AppName }
      </Typography>
    </Toolbar>
  </AppBar>
);


export const Header = withStyles(styles)(AppHeader);