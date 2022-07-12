const express = require('express');
const path = require('path')
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();


// Configuracion Express

//Puerto
app.set('port', process.env.PORT || 3000);

//Importar las rutas
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');

//Motor de plantillas
app.set('view engine', 'ejs');

//Direccion de vistas
app.set('views', path.join(__dirname, 'views'));

//Configuracion MiddelWares (Antes del user)
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'pruebatecuser'

}, 'single'));

app.use(express.urlencoded({extended: false}))

//Rutas
app.use('/', customerRoutes);

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

//
app.listen(app.get('port'), ()=>{
    console.log('server On');
});