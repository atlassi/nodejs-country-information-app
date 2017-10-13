const pars = require('./json-parser');


let userInput = process.argv[2];
let json = 'countries.json';



pars(json, function(pars){ 

	for (var i = 0; i < pars.length; i++) {
			if (userInput == pars[i].name) {
				console.log(pars[i].name);
				console.log(pars[i].topLevelDomain);
			}
	}
})




