import React from 'react';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';

export const ConfirmationDialog = ({ title, content, handleCancel, handleOk, ...other }) => (
  <Dialog
    disableBackdropClick
    disableEscapeKeyDown
    maxWidth="xs"
    aria-labelledby="confirmation-dialog-title"
    { ...other }
  >
    <DialogTitle id="confirmation-dialog-title">{ title }</DialogTitle>
    <DialogContent>
      { content }
    </DialogContent>
    <DialogActions>
      <Button onClick={ handleCancel } color="primary">
        Cancel
      </Button>
      <Button onClick={ handleOk } color="primary">
        Ok
      </Button>
    </DialogActions>
  </Dialog>
);