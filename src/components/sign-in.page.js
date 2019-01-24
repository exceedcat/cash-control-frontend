import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { ButtonTypes } from '../constants/button-types';
import { DefaultButton } from './default-button';
import { authActions } from '../actions/auth.actions';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography/Typography';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background
  },
  buttonContainer: {
    display: 'flex',
    marginTop: 20
  },
  title: {
    background: `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.gradient.purple})`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
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
      isValid: false,
      showErrors: false
    };
  }

  validateField = value => value.length;
  validateForm = () => {
    this.setState(({ login, password }) => {
      const errors = {
        login: !this.validateField(login.value),
        password: !this.validateField(password.value)
      };

      return ({
        login: { ...login, error: errors.login },
        password: {
          ...password,
          error: errors.password
        },
        isValid: Object.keys(errors).reduce((prev, curr) => prev && !errors[curr], true)
      });
    });
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
    const { password, login, isValid } = this.state;
    if (!isValid) {
      this.validateForm();
      this.setState({showErrors: true});
      return;
    }
    signIn({ login: login.value, password: password.value });
  };

  render() {
    const { classes } = this.props;
    const { login, password, showErrors } = this.state;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={ classes.root }
      >
        <Typography variant="h5" className={ classes.title }>
          Sign In
        </Typography>
        <TextField
          error={ showErrors && login.error }
          id="login"
          label="Login"
          value={ this.state.login.value }
          onChange={ this.handleChange('login') }
          margin="normal"
        />
        <TextField
          error={ showErrors && password.error }
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