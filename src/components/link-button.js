import Button from '@material-ui/core/Button';
import React from 'react';

export const LinkButton = (props) => (
  <Button component={ props.component } color={ props.type }
          variant="contained">{ props.children }</Button>
);