var elasticsearch=require('elasticsearch');
var errorHandler = require('./error.js');
var fs = require('fs');

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
  console.log("HELLO");
    //const {getBrands} = require('node-car-api');
	let cars = [];
	//let ct = 0;
	let enr = 1;
	//async function print () {
		
	/*  const brands = await getBrands();
		//console.log(brands);
		for(i = 0; i<brands.length;i++) {
			ct++;
			const {getModels} = require('node-car-api');
			async function print () {
				const models = await getModels(brands[i]);
				//console.log(models);
				cars.push(models);
				ct--;
				console.log(ct);
				if(ct==0) {
					fs.writeFile('cars.json', JSON.stringify(cars, null, 4), function(err){});
					console.log("enregistement OK");
					enr = 1;
					console.log("Enr" + enr);
				}
			}
		print();
		}		
	}
	print();*/
	//maintenant on enregistre dans la base de données
	if(enr == 1) {
		console.log("Debut envoie ElasticSearch ");
		var client = new elasticsearch.Client({
			host: 'localhost:9292',
			log: 'trace'
		}); 
		var obj = JSON.parse(fs.readFileSync('cars.json', 'utf8'));
		var i = 1;
		obj.forEach(function(model)
		{
			cars.push( {index : { _index: 'cars', _type: 'model', _id: i }})
			cars.push({ doc: model})
			i++
		});
		console.log(cars);
		client.bulk({
		body : cars
		}, function (err, resp) {
		});
		console.log("Envoie ElasticSearch OK");
	}
	//res.json({message : "OK"});
//};

}


/*https://blog.raananweber.com/2015/11/24/simple-autocomplete-with-elasticsearch-and-node-js/*/



/*
const bulkIndex = function bulkIndex(index, type, data) {
	console.log("OKKKKKKKK");
  let bulkBody = [];

  data.forEach(item => {
	bulkBody.push({
	  index: {
		_index: uuid,
		_brand: brand,
		_volume: volume,
		_model: model,
		_name: name
	  }
	});

	bulkBody.push(item);
  });

  esClient.bulk({body: bulkBody})
  .then(response => {
	console.log('here');
	let errorCount = 0;
	response.items.forEach(item => {
	  if (item.index && item.index.error) {
		console.log(++errorCount, item.index.error);
	  }
	});
	console.log(
	  `Successfully indexed ${data.length - errorCount}
	   out of ${data.length} items`
	);
  })
  .catch(console.err);
};

const test = function test() {
  const articlesRaw = fs.readFileSync('data.json');
  bulkIndex('library', 'article', articles);
};
*/