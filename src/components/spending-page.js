import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import * as moment from 'moment';
import LeftArrow from '@material-ui/icons/NavigateBefore';
import RightArrow from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 24,
  },
  date: {
    fontSize: 18,
  },
  picker: {
    display: 'none'
  }
});

class Spending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment.now()
    };
  }

  handleDateChange = date => {
    console.log(date);
    this.setState({ date });
  };

  openPicker = e => {
    // do not pass Event for default pickers
    this.picker.open(e);
  };

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
        <Grid container justify="center" alignItems="center">
          <LeftArrow className={ classes.icon }/>
          <Typography className={ classes.date } onClick={this.openPicker}>
            { moment(date).format('DD MMM YYYY') }
          </Typography>
          <RightArrow className={ classes.icon }/>
        </Grid>
        <MuiPickersUtilsProvider utils={ MomentUtils }>
          <div className={this.props.classes.picker}>
              <DatePicker
                value={date}
                onChange={this.handleDateChange}
                ref={node => {
                  console.log(node); // check console to view the api of wrapper
                  this.picker = node;
                }}
              />
          </div>
        </MuiPickersUtilsProvider>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

export const SpendingPage = connect(null, mapDispatchToProps)((withStyles)(styles)(Spending));