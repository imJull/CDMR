import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Navbar } from '../nav/Navbar'
import { useState } from 'react';

import ClienteAdd from './ClientAdd';
import { Card, Container, Divider, Paper, styled, Typography } from '@mui/material';
import "./clientAdmin.css"

export const ClientAdmin = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const StyledContainer = styled(Container)({
    backgroundColor: "rgba(128, 177, 209, 0.267)",
    borderRadius: "5px",
    border: "1px solid lightgray",
    height: "100%",
    margin: "15px 0",
    width: "80%",
  })

  return (
    <div className='client-container'>
      <Navbar />
      <StyledContainer>
      <Paper elevation={5} className="header-containerC">
        <div className="headerTextC">
          <h1>Clientes Potenciales</h1>
          <div className="header-icons">
            <Button variant='text'>
              <SearchOutlinedIcon sx={{fontSize: "45px"}} onClick={() => console.log("HolaOut")} />
            </Button>
            <Button onClick={handleClickOpen} variant='text'>
              <AddIcon sx={{fontSize: "45px"}} onClick={() => console.log("HolaAdd")}/>
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <ClienteAdd hancleClose={handleClose} />
          </Dialog>
          </div>
        </div>
      </Paper>
      <Paper elevation={4} className="client-main-container">
        <Card sx={{ backgroundColor:"rgba(128, 177, 209, 0.267)"}} className="client-card">
          <div className="card-header">
            <Typography variant='h5'>Nombre del Cliente</Typography>
            <h3>Clasificación</h3>
          </div>
          <Divider/>
          <div className="card-footer">
            <h4>Pais de Origen</h4>
            <h4>Identificacion</h4>
            <h4>correo@electronico.com</h4>
          </div>
        </Card>
      </Paper>
      </StyledContainer>
    </div>
  )
}
