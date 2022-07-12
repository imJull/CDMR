import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import "./homeHeader.css";
import { useNavigate } from "react-router-dom";

  const foto =
    "https://ih1.redbubble.net/image.1370448268.2354/st,small,507x507-pad,600x600,f8f8f8.jpg";


export const HomeHeader = () => {

  const Navigate = useNavigate();

  const addUser = () => {
    console.log("Add user")
  }


  return (
    <div className="home-container">
      <div className="header-container">
        <Stack className="avatar" direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src={foto}
            sx={{ width: 100, height: 100 }}
          />
        </Stack>
        <div className="headerText">
          <h1>Lil Jay </h1>
          <p>User Roll - Bilbioteca Unadeca</p>
        </div>
      </div>
      <div className="main-container">
        <div className="main-addUser">
          <div className="main-addUser-text">
            <p>Usuarios En la base de datos</p>
            <Button variant="contained">
              <AddIcon onClick={addUser} />
            </Button>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Nacionalidad</TableCell>
                <TableCell align="left">Edad</TableCell>
                <TableCell align="left">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key=""
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Lil Jay
                </TableCell>
                <TableCell align="left">45221</TableCell>
                <TableCell align="left">Costa Rica</TableCell>
                <TableCell align="left">600</TableCell>
                <TableCell align="left">
                  {"hola" ? (
                    <div className="cl-state">
                      <FiberManualRecordIcon
                        sx={{ fontSize: "9px", color: "green" }}
                      />
                      <span>Activo</span>
                    </div>
                  ) : (
                    <div className="cl-state">
                      <FiberManualRecordIcon
                        sx={{ fontSize: "9px", color: "red" }}
                      />
                      <span>Deshabilitado</span>{" "}
                    </div>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
