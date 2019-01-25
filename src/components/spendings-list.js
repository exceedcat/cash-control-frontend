import React from 'react';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Typography from '@material-ui/core/Typography/Typography';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%'
  },
  item: {
    display: 'flex',
    alignItems: 'baseline'
  },
  amount: {
    display: 'inline-block',
    width: 50,
    textAlign: 'right',
    background: `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.gradient.purple})`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  }
});

const ListItemLink = (props) => <ListItem button divider
                                          component="a" { ...props } />;

export const SpendingsList = withStyles(styles)(({ spendings, classes }) =>
  (<List component="section" className={ classes.root }>
    { spendings.map(spending => (
      <ListItemLink
        key={ spending.id }
        href={`/${spending.id}`}
        className={ classes.item }
      >
        <Typography
          variant="h5"
          className={ classes.amount }
        >
          { spending.amount } ₴
        </Typography>
        <ListItemText primary={ spending.title }/>
      </ListItemLink>
    )) }
  </List>));