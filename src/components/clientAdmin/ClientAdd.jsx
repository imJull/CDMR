import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Autocomplete,
  Grid,
  styled,
} from "@mui/material";

export default function ClienteAdd({ handleClose }) {
  const StyledGrid = styled(Grid)({
    padding: "5px",
    gap: "15px",
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0",
  });

  return (
    <div>
      <DialogTitle>Agregar Nuevo Cliente</DialogTitle>
      <form>
        <DialogContent>
          <DialogContentText marginBottom={3}>
            Por favor rellene los espacios solicitados con los datos necesarios
            para que el la información almacenada sea utilizada de manera
            necesaria.
          </DialogContentText>
          <StyledGrid>
            <TextField
              sx={{ flex: 1 }}
              variant="outlined"
              autoFocus
              label="Nombre"
            />
            <TextField
              sx={{ flex: 1 }}
              variant="outlined"
              autoFocus
              label="1er Apellido"
            />
            <TextField
              sx={{ flex: 1 }}
              variant="outlined"
              autoFocus
              label="2do Apellido"
            />
          </StyledGrid>
          <StyledGrid>
            <Autocomplete
              sx={{ flex: "3" }}
              variant="outlined"
              options={identtype}
              renderInput={(params) => (
                <TextField {...params} label="Tipo de identificación" />
              )}
            ></Autocomplete>
            <TextField sx={{ flex: "4" }} label="Numero de Documento" />
            <TextField sx={{ flex: "3" }} label="Pais" />
          </StyledGrid>
          <StyledGrid>
            <TextField
              sx={{ flex: 1 }}
              placeholder="19/02/1887"
              label="Fecha de Nacimiento"
            />
            <TextField
              sx={{ flex: 2 }}
              autoFocus
              id="name"
              label="Correo Electrónico"
              type="email"
              variant="outlined"
            />
          </StyledGrid>
          <StyledGrid>
            <TextField sx={{ flex: 1 }} label="Telefono" />
            <TextField sx={{ flex: 1 }} label="Iglesia" />
            <TextField sx={{ flex: 1 }} label="Colegio de Procedencia" />
          </StyledGrid>
          <StyledGrid>
            <Autocomplete
              sx={{ flex: 1 }}
              options={carreras}
              renderInput={(params) => (
                <TextField {...params} label="Carreras de interes" />
              )}
              label="Carreras de interes"
            />
            <Autocomplete
              sx={{ flex: 1 }}
              label="Clasificación"
              options={clasificacion}
              renderInput={(params) => (
                <TextField {...params} label="Tipo de identificación" />
              )}
            />
          </StyledGrid>
          <StyledGrid>
            <TextField sx={{width:"600px", textAlign:"center"}} label="URL Imagen"/>
          </StyledGrid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="primary" onClick={handleClose}>
            Añadir
          </Button>
        </DialogActions>
      </form>
    </div>
  );
}

const identtype = [
  { label: "CEDULA Identidad" },
  { label: "CEDULA Jurídica" },
  { label: "DIMEX" },
];

const carreras = [
  { label: "Administración" },
  { label: "Psicología" },
  { label: "Educación" },
  { label: "Teología" },
  { label: "Ingeniería" },
  { label: "Enfermería" },
];

const clasificacion = [
  { label: "A" },
  { label: "B" },
  { label: "C" },
  { label: "D" },
  { label: "NA" },
];
