module.exports = function(app) {
  var library = require('./libraryController');

  app.route('/populate')
    .post(library.addElem); //modif la base de données

  app.route('/suv')
    .get(library.getElem); //lecture de la base de données
};