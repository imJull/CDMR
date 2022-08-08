import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import ClienteAdd from "./ClientAdd";


export const ClientAdminList = ({ client }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  

  return (
    <>
      <Card
        onClick={handleClickOpen}
        sx={{ backgroundColor: "rgba(128, 177, 209, 0.267)" }}
        className="client-card"
      >
        <div className="card-header">
          <Typography variant="h5">
            {client.firstname} {client.lastname}
          </Typography>
          <h3>Clasificación - {client.classification}</h3>
        </div>
        <Divider />
        <div className="card-footer">
          <span>
            {" "}
            <h3>País de Origen</h3> {client.country}
          </span>
          <span>
            {" "}
            <h3>N.Identificacion</h3>
            {client.doc_number}
          </span>
          <span>
            {" "}
            <h3>Correo</h3> {client.email}
          </span>
        </div>
      </Card>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography variant="h4" component="p">{client.firstname} {client.lastname}</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                src={client.photo}
                title={client.firstname}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="p">
                  {client.country}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  El potencial cliente {client.firstname} {client.lastname}, es de nacionalidad <strong>{client.country}</strong>.<br/>
                  Su tipo de identificación es <strong>{client.doc_type}</strong> y su numero es <strong>{client.doc_number}</strong>.<br/>
                  Nación el <strong>{client.birth_date}</strong> y estudió en el colegio <strong>{client.college}</strong>. 
                  Actual mente asiste a la iglesia <strong>{client.church}</strong> <br/>
                  El correo del cliente es <strong>{client.email}</strong> <br/>
                  La clasificacion de contacto es de tipo <strong>{client.classification}</strong>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
