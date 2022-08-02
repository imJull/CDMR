import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl } from '@mui/material';

export const AddUser = ( {handleClose} ) => {
  return (
    <div>
      <DialogTitle>Nuevo Usuario</DialogTitle>
        <FormControl>
              <DialogContent>
                <DialogContentText>
                  To subscribe to this website, please enter your email address here. We
                  will send updates occasionally.
                </DialogContentText>
               
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  /* fullWidth */
                  variant="outlined"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button color="primary" onClick={handleClose}>Añadir</Button>
              </DialogActions>
          </FormControl>
    </div>
  )
}
