import { ButtonTypes } from '../constants/button-types';
import Grid from '@material-ui/core/Grid/Grid';
import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LinkButton } from './link-button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.gradient.darkBlue});`
  },
  buttonContainer: {
    display: 'flex'
  },
  space: {
    display: 'block',
    width: 16,
  }
});

const SignInLink = props => (<Link to="/signin" { ...props } />);
const SignUpLink = props => (<Link to="/signup" { ...props } />);

const Starter = ({ classes }) => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={ classes.root }
  >
    <div className={ classes.buttonContainer }>
      <LinkButton type={ ButtonTypes.secondary } component={ SignInLink }>
        Sign In
      </LinkButton>
      <span className={ classes.space }>{ ' ' }</span>
      <LinkButton type={ ButtonTypes.secondary } component={ SignUpLink }>
        Sign Up
      </LinkButton>
    </div>
  </Grid>
);

export const StarterPage = (withStyles)(styles)(Starter);