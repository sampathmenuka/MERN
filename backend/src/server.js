import express from 'express';
import notesRouter from './routes/notesRouter.js';
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);

//const express = require("express");

const app = express();
const PORT = process.env.PORT || 5001

connectDB();

app.use('/api/notes', notesRouter);



app.listen(5001, () => {
    console.log("Server is running PORT: ", PORT);
});



