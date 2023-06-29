const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello mot ngay that dep nho</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>Chao buoi sang<h1>");    
});

app.listen(port,() => {
    console.log("Launching project...");
});