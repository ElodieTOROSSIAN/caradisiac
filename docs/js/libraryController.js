var elasticsearch=require('elasticsearch');
var errorHandler = require('./error.js');

exports.getElem = function(req, res) {
  /*Album.find({}).then(function(albums) {
    res.status(200).json(albums);
  }).catch(function(err) {
    errorHandler.error(res, err.message, "Failed to get albums");
  });*/
  
  
  // Trouver les données
  

  
};


exports.addElem = function(req, res) {
  //Enregister les données
    const {getBrands} = require('node-car-api');

	async function print () {
	  const brands = await getBrands();
		//console.log(brands);
		for(i = 0; i<brands.length;i++) {
			const {getModels} = require('node-car-api');
			async function print () {
				const models = await getModels(brands[i]);
				console.log(models);
				
			}
		print();
		}
	}
print();
res.json({message : "OK"});
};




