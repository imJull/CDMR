import { TableCell, TableRow } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";

export const User = ({ users }) => {
  return (
    <>
      {users.map((userx) => {
        return (
          <TableRow
            key={userx.user_id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {userx.full_name}
            </TableCell>
            <TableCell align="left">{userx.user_id}</TableCell>
            <TableCell align="left">{userx.country}</TableCell>
            <TableCell align="left">{userx.age}</TableCell>
            <TableCell align="left">
              {userx.state ? (
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
        );
      })}
    </>
  );
};
