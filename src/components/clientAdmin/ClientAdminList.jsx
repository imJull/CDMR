import { Card, Divider, Typography } from '@mui/material'
import React from 'react'

export const ClientAdminList = ({client}) => {
  return (
    <Card sx={{ backgroundColor:"rgba(128, 177, 209, 0.267)"}} className="client-card">
          <div className="card-header">
            <Typography variant='h5'>{client.firstname} {client.lastname}</Typography>
            <h3>Clasificación - {client.classification}</h3>
          </div>
          <Divider/>
          <div className="card-footer">
            <span> <h3>País de Origen</h3> {client.country}</span>
            <span> <h3>N.Identificacion</h3>{client.doc_number}</span>
            <span> <h3>Correo</h3> {client.email}</span>
          </div>
        </Card>
  )
}
