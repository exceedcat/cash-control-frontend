import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import * as moment from 'moment';
import DatePicker from './date-picker';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background
  }
});

class Spending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment.now()
    };
  }

  updateDate(date) {
    this.setState({ date });
  }

  render() {
    const { classes } = this.props;
    const { date } = this.state;

    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        className={ classes.root }
      >
        <DatePicker
          date={ date }
          onChange={ (e) => this.updateDate(e) }
        />
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

export const SpendingPage = connect(null, mapDispatchToProps)((withStyles)(styles)(Spending));