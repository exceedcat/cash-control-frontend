import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background
  }
});

class Spending extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    selectedDate: '2018-01-01T00:00:00.000Z',
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={ classes.root }
      >
        <MuiPickersUtilsProvider utils={ MomentUtils }>
          <Grid container className={ classes.grid } justify="space-around">
            <DatePicker
              margin="normal"
              label="Date picker"
              value={ selectedDate }
              onChange={ this.handleDateChange }
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

export const SpendingPage = connect(null, mapDispatchToProps)((withStyles)(styles)(Spending));