import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core';
import { AppName } from '../constants/app-name';
import { Link } from 'react-router-dom';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none'
  }
});


const AppHeader = ({ withMenu, classes, handleMenuClick }) => (
  <AppBar position="static">
    <Toolbar>
      { withMenu &&
      <IconButton
        className={ classes.menuButton }
        color="inherit"
        aria-label="Menu"
        onClick={ handleMenuClick }
      >
        <MenuIcon/>
      </IconButton>
      }
      <Typography variant="h6" color="inherit">
        <Link to="/" className={ classes.link }>
          { AppName }
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
);


export const Header = withStyles(styles)(AppHeader);