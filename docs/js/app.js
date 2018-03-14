var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});




/*aide :
https://openclassrooms.com/courses/maitrisez-les-bases-de-donnees-nosql/etudiez-le-fonctionnement-d-elasticsearch
https://www.compose.com/articles/getting-started-with-elasticsearch-and-node/
https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html
https://konghq.com/blog/list-of-40-tutorials-on-how-to-create-an-api/
*/



/*
populate prend les données de la library et enregister les données
et suv va renvoyer les 10 premier 4*4 avec le plus grand coffre 
*/