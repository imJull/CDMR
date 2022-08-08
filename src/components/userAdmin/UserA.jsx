import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Divider, Typography } from "@mui/material";

export const UserA = ({ user, deleteUser }) => {
  return (
    <>
      <div className="card-name">
        <Typography mb={1} variant="h5" component="p">
          {user.full_name}
        </Typography>
        <Divider width={200} />
        <Typography mt={1} variant="h7" component="p">
          {user.username}
        </Typography>
      </div>
      <div className="card-roll">
        <h3>{user.user_roll}</h3>
        <h4>{user.email}</h4>
      </div>
      {user.state ? (
        <div style={{color:"green"}}className="card-status">
          <h3>Activo</h3>
        </div>
      ) : (
        <div className="card-status">
          <h3 style={{color:"red"}}>Inactivo</h3>
        </div>
      )}
      <div className="card-icons">
        <Button variant="outlined">
          <EditIcon onClick={() => console.log("Edit "+ user.user_id)} />
        </Button>
        <Button variant="outlined">
          <DeleteIcon onClick={() => deleteUser(user.user_id)} />
        </Button>
      </div>
    </>
  );
};
