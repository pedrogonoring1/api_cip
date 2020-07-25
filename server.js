const express = require('express');
const connectDB = require('./data/Connection');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


connectDB()
const Port = process.env.Port || 8877;

//Chamando as rotas
app.use('/user', require('./routers/user'));
app.use('/ideia', require('./routers/ideia'));
app.use('/problema', require('./routers/problema'));


//app.listen(Port, () => console.log('Servidor Iniciado!'));
app.listen(process.env.PORT || 8080);


module.exports = app;