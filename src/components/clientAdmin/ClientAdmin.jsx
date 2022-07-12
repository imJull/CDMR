import React from 'react'
import { Navbar } from '../nav/Navbar'
import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import "./clientAdmin.css"

export const ClientAdmin = () => {
  return (
    <div className='client-container'>
      <Navbar />
      <div className="header-container">
        <div className="headerText">
          <h1>Clientes Potenciales</h1>
          <div className="header-icons">
            <SearchOutlinedIcon />
            <AddIcon />
          </div>
        </div>
      </div>
      <div className="client-main-container">
        <div className="client-card">
          <div className="card-header">
            <h1>Nombre del Cliente</h1>
            <h3>Clasificaión</h3>
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
