// const express = require('express');
import express from 'express';
import configViewEngine from './configs/viewEngine.js';
const app = express();
const port = 3000;

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