import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, styled, TextField } from '@mui/material'
import React from 'react'
import {useNavigate } from 'react-router-dom'

export const LandingPage = () => {
    const paperStyle={padding:"20px",height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const StyledGrid = styled(Grid)({
        padding: "5px ",
        margin:"15px 0",
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    })

    const Navigate = useNavigate()
    const redirectHome = (e) => {
        e.preventDefault()
        setTimeout(() =>{
            console.log("Redirigiendo a Pagina de Inicio")
            Navigate("/")
        },3000)
    }

  return (
    <Grid component="form">
        <Paper elevation={10} style={paperStyle}>
            <StyledGrid sx={{flexDirection: "column"}}>
                <Avatar style={avatarStyle}></Avatar>
                <h2 style={{marginTop:5}}>Iniciar Sesion</h2>
            </StyledGrid>
            <StyledGrid>
                <TextField label="Nombre de Usuario" placeholder='Digite el nombre de usuario' fullWidth required/>
            </StyledGrid>
            <StyledGrid>
                <TextField label="Contraseña" placeholder='Digite contraseña' type="password" fullWidth required/>
            </StyledGrid>
            <StyledGrid>
                <FormControlLabel control={<Checkbox name="chcked" color="primary"/>} label="Recordarme"/>
            </StyledGrid>
            <StyledGrid>
                <Button variant='contained' type='submit' color="info" onClick={redirectHome}>Inciar Sesión</Button>
            </StyledGrid>
        </Paper>
    </Grid>
  )
}
