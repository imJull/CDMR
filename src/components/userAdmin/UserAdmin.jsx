import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Navbar } from "../nav/Navbar";
import { AddUser } from "./AddUser";
import { usersData, clientsData } from "../../data/Data";


import "./userAdmin.css"
import { Container, Paper, Typography } from "@mui/material";
import { UserAdminList } from "./UserAdminList";

export const UserAdmin = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState(usersData);

  useEffect(() =>{
    
  },[users])
  
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.user_id !== id))
    console.log(id + " Eliminado")
  }

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
          <UserAdminList users={users} deleteUser={deleteUser} />
        </Container>
      </div>
    </div>
  );
};
