import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();
dotenv.config();

//Conexión mongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Conectado a la base de datos de CDMR")
    } catch (error) {
        throw error;
    }
}

//Midlewares
app.use(cors());
app.get("/", (req, res) => {
    try {
        res.json("Página Principal")
    } catch (err) {
        res.json(err)
    }
})

//Conexión inicial
app.listen(process.env.PORT, () => {
    connect()
    console.log("Backend Conectado");
})