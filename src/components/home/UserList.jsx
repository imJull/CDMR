import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { User } from "./User";

export const UserList = ( {users} ) => {
  return (
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

        <User users={users} />
        
      </TableBody>
    </Table>
  );
};
