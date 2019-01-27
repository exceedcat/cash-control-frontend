import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer/SwipeableDrawer';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ExitIcon from '@material-ui/icons/ExitToApp';
import { withStyles } from '@material-ui/core';
import { authActions } from '../actions/auth.actions';
import { connect } from 'react-redux';

const styles = {
  list: {
    width: 240
  }
};

class Drawer extends Component {
  constructor(props) {
    super(props);
    const { exit } = props;
    this.state = {
      options: [
        {
          title: 'Exit',
          icon: () => <ExitIcon/>,
          handleClick: () => exit()
        }
      ]
    };
  }

  render() {
    const { handleClose, handleOpen, open, classes } = this.props;
    const { options } = this.state;
    return (
      <SwipeableDrawer
        open={ open }
        onClose={ handleClose }
        onOpen={ handleOpen }
      >
        <div
          tabIndex={ 0 }
          role="button"
          onClick={ handleClose }
          onKeyDown={ handleClose }
        >
          <List className={ classes.list }>
            { options.map(opt => (
              <ListItem button key={ opt.title } onClick={ opt.handleClick }>
                <ListItemIcon>{ opt.icon() }</ListItemIcon>
                <ListItemText primary={ opt.title }/>
              </ListItem>
            )) }
          </List>
        </div>
      </SwipeableDrawer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  exit: () => dispatch(authActions.signOut())
});

export const MenuDrawer = connect(null, mapDispatchToProps)(withStyles(styles)(Drawer));
