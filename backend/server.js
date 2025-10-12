import express from 'express';
import notesRouter from './routes/notesRouter.js';

//const express = require("express");

const app = express();

app.use('/api/notes', notesRouter);


app.listen(5001, () => {
    console.log("Server is running PORT: 5001");
});