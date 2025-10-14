import express from 'express';
import notesRouter from './routes/notesRouter.js';
import {connectDB} from "./config/db.js";

//const express = require("express");

const app = express();

connectDB();

app.use('/api/notes', notesRouter);



app.listen(5001, () => {
    console.log("Server is running PORT: 5001");
});



