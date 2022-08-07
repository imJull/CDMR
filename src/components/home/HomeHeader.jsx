import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { usersData, clientsData } from "../../data/Data";
import { UserList } from "./UserList";
import "./homeHeader.css";

const foto =
  "https://ih1.redbubble.net/image.1370448268.2354/st,small,507x507-pad,600x600,f8f8f8.jpg";

export const HomeHeader = () => {
  const [users, setUsers] = useState(usersData);

  const Navigate = useNavigate();

  const addUser = () => {
    console.log("Add user")
    Navigate("/admin");
  };


    return (
      <Box  className="home-container">
        <Paper elevation={3} className="header-container">
          <Stack className="avatar" direction="row" spacing={2}>
            <Avatar
              alt="Lil Jay Fendi"
              src={foto}
              sx={{ width: 100, height: 100 }}
            />
          </Stack>
          <div className="headerText">
            <h1>Lil Jay </h1>
            <p>User Roll - Bilbioteca Unadeca</p>
          </div>
        </Paper>
        <Paper elevation={3} className="main-container">
          <Card className="main-addUser">
            <div className="main-addUser-text">
              <p>{users.length} Usuarios en la base de datos</p>
              <Button variant="contained">
                <AddIcon onClick={addUser} />
              </Button>
            </div>
          </Card>
          <TableContainer component={Paper}>
            <UserList users={users}/>
          </TableContainer>
        </Paper>
      </Box>
    );
};
