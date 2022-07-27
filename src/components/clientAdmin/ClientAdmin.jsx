import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Navbar } from '../nav/Navbar'
import { useState } from 'react';

import ClienteAdd from './ClientAdd';
import "./clientAdmin.css"

export const ClientAdmin = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='client-container'>
      <Navbar />
      <div className="header-containerC">
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
      </div>
      <div className="client-main-container">
        <div className="client-card">
          <div className="card-header">
            <h1>Nombre del Cliente</h1>
            <h3>Clasificación</h3>
          </div>
          <div className="card-footer">
            <h4>Pais de Origen</h4>
            <h4>Identificacion</h4>
            <h4>correo@electronico.com</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
