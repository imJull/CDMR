import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, Checkbox, FormControlLabel, Grid, MenuItem, Stack, styled, Typography } from '@mui/material';

export const AddUser = ( {handleClose, addUser} ) => {
  
  const [inputs, setInputs]= useState({
/*     username:"",
    user_roll:true,
    full_name:"",
    country:"",
    age:"",
    state:"",
    phone:"",
    email:"",
    password:"",
    photo:"" */
  })

  const StyledGrid = styled(Grid)({
    padding: "5px",
    gap: "15px",
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0",
  });

  return (
    <div>
    <DialogTitle>Agregar Nuevo Usuario</DialogTitle>
    <form>
      <DialogContent>
        <DialogContentText marginBottom={3}>
          Por favor rellene los espacios solicitados con los datos necesarios
          para que el la información almacenada sea utilizada de manera
          necesaria.
        </DialogContentText>
        <StyledGrid>
          <TextField
            sx={{ flex: 1 }}
            value={inputs.full_name}
            variant="outlined"
            autoFocus
            label="Nombre Completo"
          />
          <TextField
            sx={{ flex: 1 }}
            value={inputs.username}
            variant="outlined"
            autoFocus
            label="Nombre de Usuario"
          />
          <Autocomplete
            sx={{ flex: 1 }}
            value={estado.value}
            variant="outlined"
            options={estado}
              renderInput={(params) => (
                <TextField {...params} label="Estado" />
              )}
          />
        </StyledGrid>
        <StyledGrid>
          <TextField sx={{ flex: 2 }} type='number' label="Numero de Teléfono" />
          <TextField
            sx={{ flex: 2 }}
            value={inputs.phone}
            autoFocus
            id="name"
            label="Correo Electrónico"
            type="email"
            variant="outlined"
          />
        </StyledGrid>
        <StyledGrid sx={{justifyContent: "center"}} >
          <FormControlLabel
            value={inputs.user_roll} 
            label= "Administrador"
            control={<Checkbox defaultChecked />}
          />
          
        </StyledGrid>
        <StyledGrid>
          <TextField sx={{ flex: 2 }} value={inputs.password} label="Contraseña" />
          <TextField sx={{width:"600px", textAlign:"center"}} value={inputs.photo} label="URL Imagen"/>
        </StyledGrid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button color="primary" onClick={() => addUser(inputs.full_name)}>
          Añadir
        </Button>
      </DialogActions>
    </form>
  </div>
  )
}

const estado = [
  { label: "Activo", value:1 },
  { label: "Inactivo", value:2 },
];
