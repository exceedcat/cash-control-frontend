import React, { Component, Fragment } from 'react';
import { theme } from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Header } from './components/header';
import { StarterPage } from './components/starter.page';
import withStyles from '@material-ui/core/styles/withStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignInPage } from './components/sign-in.page';
import { SignUpPage } from './components/sign-up.page';

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
    this.state = {
      auth: false

    };
  }

  render() {
    const { classes } = this.props;
    const { auth } = this.state;

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
                </Switch>)
              }
              { auth && (
                <Switch>
                  <Route path="/" exact component={ Header }/>
                </Switch>)
              }
            </Fragment>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default (withStyles)(styles)(App);
