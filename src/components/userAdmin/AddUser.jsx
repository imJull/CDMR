import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, FormControl, MenuItem } from '@mui/material';

export const AddUser = ( {handleClose} ) => {


  return (
    <div>
      <DialogTitle>Nuevo Usuario</DialogTitle>
        <form>
              <DialogContent>
                <DialogContentText>
                  To subscribe to this website, please enter your email address here. We
                  will send updates occasionally.
                </DialogContentText>
                <TextField variant='outlined' autoFocus label="Nombre" />
                <TextField variant='outlined' autoFocus label="1er Apellido" />
                <TextField variant='outlined' autoFocus label="2do Apellido" />
                <TextField variant='outlined' label="Tipo de identificación" value="" select fullWidth>
                  <MenuItem value="CEDULA IDENTIDAD">Cédula de Identidad</MenuItem>
                  <MenuItem value="CEDULA JURIDICA">Cédula Jurídica</MenuItem>
                  <MenuItem value="DIMEX">DIMEX</MenuItem>
                </TextField>
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
          </form>
    </div>
  )
}
