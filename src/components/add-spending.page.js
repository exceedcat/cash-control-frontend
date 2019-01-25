import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { ButtonTypes } from '../constants/button-types';
import { DefaultButton } from './default-button';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography/Typography';
import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import * as moment from 'moment';
import { spendingsActions } from '../actions/spendings.actions';
import { withRouter } from 'react-router-dom';

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
  },
  picker: {
    marginTop: theme.spacing.unit * 2
  }
});

class AddSpending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: '',
        error: false
      },
      amount: {
        value: '',
        error: false
      },
      date: {
        value: moment(),
        error: false
      },
      isValid: false,
      showErrors: false
    };
  }

  validateField = value => value.length;
  validateAmount = value => !Number.isNaN(value) && value > 0;
  validateForm = () => {
    this.setState(({ title, amount }) => {
      const errors = {
        title: !this.validateField(title.value),
        amount: !this.validateAmount(amount.value)
      };

      return ({
        title: { ...title, error: errors.title },
        amount: {
          ...amount,
          error: errors.amount
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

  handleDateChange = e => {
    this.setState({
      date: { value: e, error: false }
    });
  };

  handleSubmit = () => {
    const { add, history } = this.props;
    const { title, amount, date, isValid } = this.state;
    if (!isValid) {
      this.validateForm();
      this.setState({ showErrors: true });
      return;
    }
    add({ title: title.value, amount: amount.value, date: date.value, history });
  };

  render() {
    const { classes } = this.props;
    const { title, amount, date, showErrors } = this.state;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={ classes.root }
      >
        <Typography variant="h5" className={ classes.title }>
          Add spending
        </Typography>
        <TextField
          error={ showErrors && title.error }
          id="title"
          label="Title"
          value={ title.value }
          onChange={ this.handleChange('title') }
          margin="normal"
        />
        <TextField
          error={ showErrors && amount.error }
          id="amount"
          label="Amount"
          value={ amount.value }
          onChange={ this.handleChange('amount') }
          margin="normal"
        />
        <MuiPickersUtilsProvider utils={ MomentUtils }>
          <div className={ this.props.classes.picker }>
            <DatePicker
              label="Date"
              value={ date.value }
              onChange={ this.handleDateChange }
              showTodayButton
              disableFuture
            />
          </div>
        </MuiPickersUtilsProvider>
        <div className={ classes.buttonContainer }>
          <DefaultButton
            type={ ButtonTypes.primary }
            onClick={ this.handleSubmit }
          >
            Add
          </DefaultButton>
        </div>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: ({ title, amount, date, history }) => dispatch(spendingsActions.add({
    title,
    amount,
    date,
    history
  }))
});

export const AddSpendingPage = withRouter(connect(null, mapDispatchToProps)((withStyles)(styles)(AddSpending)));