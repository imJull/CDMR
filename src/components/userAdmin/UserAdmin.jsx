import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navbar } from "../nav/Navbar";
import { AddUser } from "./AddUser";
import "./userAdmin.css"
import { Card, Container, Divider, Paper, Typography } from "@mui/material";

export const UserAdmin = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="user-container">  
      <Container>
        <Paper elevation={3} className="header-containerU">
          <div className="headerTextU">
            <Typography variant="h4">Administración de Usuarios</Typography>
            <div className="header-icons">
              <Button variant="text">
                <SearchOutlinedIcon
                  sx={{ fontSize: "45px" }}
                  onClick={() => console.log("HolaOut")}
                />
              </Button>
              <Button onClick={handleClickOpen} variant="text">
                <AddIcon
                  sx={{ fontSize: "45px" }}
                  onClick={() => console.log("HolaAddUser")}
                />
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <AddUser hancleClose={handleClose} />
              </Dialog>
            </div>
          </div>
        </Paper>
        <Paper elevation={3} className="user-main-container">
          <Card sx={{ backgroundColor: "rgba(128, 177, 209, 0.267)"}} className="user-card">
            <div className="card-name">
              <Typography mb={1} variant="h5" component="p">Nombre Completo</Typography>
              <Divider/>
              <Typography mt={1} variant="h7" component="p">Nombre de Usuario</Typography>
            </div>
            <div className="card-roll">
              <h3>Rol de Usuario</h3>
              <h4>correo@electronico.com</h4>
            </div>
            <div className="card-status">
              <h3>Activo</h3>
            </div>
            <div className="card-icons">
              <Button variant="outlined">
                <EditIcon/>
              </Button>
              <Button variant="outlined">
                <DeleteIcon />
              </Button>
            </div>
          </Card>
        </Paper>
        </Container>
      </div>
    </div>
  );
};
