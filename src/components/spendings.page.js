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
import { spendingsActions } from '../actions/spendings.actions';
import { ConfirmationDialog } from './confirmation-dialog';
import Typography from '@material-ui/core/Typography/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  fab: {
    margin: 3 * theme.spacing.unit,
    marginTop: 'auto',
    alignSelf: 'flex-end'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  }
});

const AddSpendingLink = props => <Link to="/add" { ...props } />;

class Spendings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      confirmationOpen: false,
      selectedSpending: null
    };
  }

  updateDate(date) {
    this.setState({ date });
  }

  getCurrentSpendings = () => this.props.spendings
    .filter(s =>
      moment(s.date).format('YYYY-MM-DD') === this.state.date.format('YYYY-MM-DD')
    );

  handleRemove = (id = this.state.selectedSpending) => {
    this.removeSpending(id);
    this.closeConfirmation();
  };

  removeSpending = id => this.props.remove(id);

  openConfirmation = id => {
    this.setState({ confirmationOpen: true, selectedSpending: id });
  };

  closeConfirmation = () => this.setState({ confirmationOpen: false, selectedSpending: null });

  render() {
    const { classes } = this.props;
    const { date, confirmationOpen } = this.state;

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
        <SpendingsList
          spendings={ this.getCurrentSpendings() }
          onDelete={ (id) => this.openConfirmation(id) }
        />
        <Fab
          color="primary"
          aria-label="Add"
          className={ classes.fab }
          component={ AddSpendingLink }
        >
          <AddIcon/>
        </Fab>
        <ConfirmationDialog
          classes={ { paper: classes.paper } }
          open={ confirmationOpen }
          title="Delete spending"
          content={ <Typography>Are you sure you want to delete this
            spending?</Typography> }
          handleCancel={ this.closeConfirmation }
          handleOk={ () => this.handleRemove() }
        />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  spendings: state.spendings
});
const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(spendingsActions.remove({ id }))
});

export const SpendingsPage = connect(mapStateToProps, mapDispatchToProps)((withStyles)(styles)(Spendings));