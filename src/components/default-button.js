import Button from '@material-ui/core/Button/Button';
import React from 'react';

export const DefaultButton = (props) => (
  <Button
    color={ props.type }
    variant="contained"
    onClick={props.onClick}
    disabled={props.disabled}
  >
    { props.children }
  </Button>
);