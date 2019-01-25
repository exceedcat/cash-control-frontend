import React, { Component, Fragment } from 'react';
import { theme } from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Header } from './components/header';
import { StarterPage } from './components/starter.page';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { SignInPage } from './components/sign-in.page';
import { SignUpPage } from './components/sign-up.page';
import { connect } from 'react-redux';
import { SpendingsPage } from './components/spendings.page';
import { AddSpendingPage } from './components/add-spending.page';


const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, auth } = this.props;

    return (
      <MuiThemeProvider theme={ theme }>
        <div className={ classes.root }>
          <Router>
            <Fragment>
              <Header withMenu={ auth }/>
              { !auth && (
                <Switch>
                  <Route path="/" exact component={ StarterPage }/>
                  <Route path="/signin" exact component={ SignInPage }/>
                  <Route path="/signup" exact component={ SignUpPage }/>
                  <Redirect to="/" />
                </Switch>)
              }
              { auth && (
                <Switch>
                  <Route path="/" exact component={ SpendingsPage }/>
                  <Route path="/add" exact component={ AddSpendingPage }/>
                  <Redirect to="/" />
                </Switch>)
              }
            </Fragment>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.token
});

export default connect(mapStateToProps)((withStyles)(styles)(App));
