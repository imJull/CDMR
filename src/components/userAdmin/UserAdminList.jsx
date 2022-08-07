import React from "react";
import {Card, Paper } from "@mui/material";
import { UserA } from "./UserA";

export const UserAdminList = ({users, deleteUser}) => {
  return (
    <Paper elevation={3} className="user-main-container">
     { users.map((user) => 
        <Card key={user.user_id} classname="user-card" onClick={() => console.log(user.username)}
            sx={{ backgroundColor: "rgba(128, 177, 209, 0.267)", display:"flex" }}
            className="user-card"
        >
            <UserA  user={user} deleteUser={deleteUser} />
        </Card>)}
    </Paper>
  );
};
