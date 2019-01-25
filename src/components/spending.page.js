import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import * as moment from 'moment';
import DatePicker from './date-picker';
import { SpendingsList } from './spendings-list';
import Fab from '@material-ui/core/Fab/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background
  },
  fab: {
    margin: 3 * theme.spacing.unit,
    marginTop: 'auto',
    alignSelf: 'flex-end'
  },
});

const AddSpendingLink = props => <Link to="/add" { ...props } />;

class Spending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }

  updateDate(date) {
    this.setState({ date });
  }

  getCurrentSpendings = () => this.props.spendings
    .filter(s =>
      moment(s.date).format('YYYY-MM-DD') === this.state.date.format('YYYY-MM-DD')
    );

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
        <SpendingsList spendings={ this.getCurrentSpendings() }/>
        <Fab
          color="primary"
          aria-label="Add"
          className={ classes.fab }
          component={ AddSpendingLink }
        >
          <AddIcon/>
        </Fab>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  spendings: state.spendings
});
const mapDispatchToProps = dispatch => ({});

export const SpendingPage = connect(mapStateToProps, mapDispatchToProps)((withStyles)(styles)(Spending));