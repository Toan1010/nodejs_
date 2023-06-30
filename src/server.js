// const express = require('express');
import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import {} from 'dotenv/config'

const app = express();
const port = process.env.PORT || 8080;

// console.log(process.env.PORT);

configViewEngine(app);

app.get('/', (req, res) => {
    res.send('Hello World');    
});

app.get('/about', (req, res) => {
    res.render('index.ejs');    
});

app.listen(port,() => {
    console.log("Launching project..");
});