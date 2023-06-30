import express from 'express';
import path from 'path';
const __dirname = path.dirname('./src/public/');

const configViewEngine = (app)=>{
    app.use(express.static(__dirname +'/public'));
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
};

export default configViewEngine;