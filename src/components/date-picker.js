import React, { Component } from 'react';
import * as moment from 'moment';
import LeftArrow from '@material-ui/icons/NavigateBefore';
import RightArrow from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography/Typography';
import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid/Grid';

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit,
    color: theme.palette.primary.main,
    fontSize: 24,
    cursor: 'pointer'
  },
  date: {
    fontSize: 18,
    color: theme.palette.primary.main,
    cursor: 'pointer'
  },
  picker: {
    display: 'none'
  }
});

// todo: implement checking date is not in future

class DatePickerComponent extends Component {
  openPicker = e => {
    this.picker.open(e);
  };

  changeDate = (date, type) => moment(date)[type](1, 'days');

  render() {
    const { classes, date, onChange } = this.props;
    return (
      <Grid container justify="center" alignItems="center">
        <LeftArrow
          className={ classes.icon }
          onClick={ () => onChange(this.changeDate(date, 'subtract')) }
        />
        <Typography className={ classes.date } onClick={ this.openPicker }>
          { moment(date).format('DD MMM YYYY') }
        </Typography>
        <RightArrow
          className={ classes.icon }
          onClick={ () => onChange(this.changeDate(date, 'add')) }
        />

        <MuiPickersUtilsProvider utils={ MomentUtils }>
          <div className={ this.props.classes.picker }>
            <DatePicker
              value={ date }
              onChange={ onChange }
              ref={ node => this.picker = node }
              disableFuture
            />
          </div>
        </MuiPickersUtilsProvider>
      </Grid>
    );
  }
}

export default (withStyles)(styles)(DatePickerComponent);