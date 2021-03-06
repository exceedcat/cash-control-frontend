import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { ButtonTypes } from '../constants/button-types';
import { DefaultButton } from './default-button';
import { authActions } from '../actions/auth.actions';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography/Typography';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
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

// todo: refactor validation?
// todo: show error message
// todo: show spinner

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        value: '',
        error: false
      },
      email: {
        value: '',
        error: false
      },
      password: {
        value: '',
        error: false
      },
      passwordConfirm: {
        value: '',
        // error: false
      },
      isValid: false,
      showErrors: false
    };
  }

  validateField = value => value.length;
  validateEmail = value => value.includes('@');
  validatePasswords = (password, confirm) => password === confirm;

  validateForm = () => {
    let isValid = true;
    this.setState(({ login, password, email, passwordConfirm }) => {
      const errors = {
        login: !this.validateField(login.value),
        email: !this.validateEmail(email.value),
        password: !this.validateField(password.value) || !this.validatePasswords(password.value, passwordConfirm.value)
      };

      isValid = Object.keys(errors).reduce((prev, curr) => prev && !errors[curr], true);

      return ({
        login: { ...login, error: errors.login },
        email: { ...email, error: errors.email },
        password: {
          ...password,
          error: errors.password
        },
        passwordConfirm: {
          ...passwordConfirm,
          error: errors.password
        },
        isValid
      });
    });
    return isValid;
  };

  handleChange = field => event => {
    const { value } = event.target;
    this.setState({
      [field]: { value, error: !this.validateField(value) },
    });
    this.validateForm();
  };

  onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    const { signUp, history } = this.props;
    const { password, login, email, isValid } = this.state;
    if (!isValid) {
      this.validateForm();
      this.setState({ showErrors: true });
      return;
    }
    signUp({
      login: login.value,
      password: password.value,
      email: email.value,
      history
    });
  };

  render() {
    const { classes } = this.props;
    const { login, email, password, passwordConfirm, showErrors } = this.state;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={ classes.root }
      >
        <Typography variant="h5" className={ classes.title }>
          Sign Up
        </Typography>
        <TextField
          error={ showErrors && login.error }
          id="login"
          label="Login"
          value={ this.state.login.value }
          onChange={ this.handleChange('login') }
          onKeyDown={ this.onKeyDown }
          margin="normal"
        />
        <TextField
          error={ showErrors && email.error }
          id="email"
          label="Email"
          value={ this.state.email.value }
          onChange={ this.handleChange('email') }
          onKeyDown={ this.onKeyDown }
          margin="normal"
        />
        <TextField
          error={ showErrors && password.error }
          id="password"
          label="Password"
          type="password"
          value={ this.state.password.value }
          onChange={ this.handleChange('password') }
          onKeyDown={ this.onKeyDown }
          margin="normal"
        />
        <TextField
          error={ showErrors && passwordConfirm.error }
          id="passwordConfirm"
          label="Confirm Password"
          type="password"
          value={ this.state.passwordConfirm.value }
          onChange={ this.handleChange('passwordConfirm') }
          onKeyDown={ this.onKeyDown }
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
  signUp: ({ login, password, email, history }) => dispatch(authActions.signUp({
    login,
    password,
    email,
    history
  }))
});

export const SignUpPage = withRouter(connect(null, mapDispatchToProps)((withStyles)(styles)(SignUp)));