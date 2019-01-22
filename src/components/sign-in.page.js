import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { ButtonTypes } from '../constants/button-types';
import { DefaultButton } from './default-button';
import { authActions } from '../actions/auth.actions';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background
  },
  buttonContainer: {
    display: 'flex',
    marginTop: 20
  }
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        value: '',
        error: false
      },
      password: {
        value: '',
        error: false
      },
      isValid: false
    };
  }

  validateField = value => value.length;
  validateForm = () => {
    this.setState(({ login, password }) => ({
      isValid: login.value && !login.error && password.value && !password.error
    }));
  };

  handleChange = field => event => {
    const { value } = event.target;
    this.setState({
      [field]: { value, error: !this.validateField(value) },
    });
    this.validateForm();
  };

  handleSubmit = () => {
    const { signIn } = this.props;
    const { password, login } = this.state;
    signIn({ login: login.value, password: password.value });
  };

  render() {
    const { classes } = this.props;
    const { login, password, isValid } = this.state;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={ classes.root }
      >
        <TextField
          error={ login.error }
          id="login"
          label="Login"
          value={ this.state.login.value }
          onChange={ this.handleChange('login') }
          margin="normal"
        />
        <TextField
          error={ password.error }
          id="password"
          label="Password"
          type="password"
          value={ this.state.password.value }
          onChange={ this.handleChange('password') }
          margin="normal"
        />
        <div className={ classes.buttonContainer }>
          <DefaultButton
            type={ ButtonTypes.primary }
            onClick={ this.handleSubmit }
            disabled={ !isValid }
          >
            Submit
          </DefaultButton>
        </div>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: ({ login, password }) => dispatch(authActions.signIn({
    login,
    password
  }))
});

export const SignInPage = connect(null, mapDispatchToProps)((withStyles)(styles)(SignIn));