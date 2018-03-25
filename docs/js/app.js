//CF : https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 9292;        // set our port

var routes = require('./routes');
routes(app);

app.listen(port); //Start server
console.log('Ecoute sur le port : ' + port);






/*
populate prend les données de la library et enregister les données
et suv va renvoyer les 10 premier 4*4 avec le plus grand coffre 
*/