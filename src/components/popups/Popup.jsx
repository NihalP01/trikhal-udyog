import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Popup = ({ title, openPopUp, content, handleClose }) => {
  return (
    <Dialog open={openPopUp}>
      <DialogTitle>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '20px',
          }}
        >
          <Typography component="div" style={{ fontSize: '1rem' }}>
            {title}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          style={{ textTransform: 'none' }}
          onClick={handleClose}
          autoFocus
        >
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default Popup;
