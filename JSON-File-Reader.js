//Part I : File I/O Practice: Country Information App

const fs = require('fs');


	var input = process.argv[2];

	fs.readFile('countries.json', function (err, data) { 
    	if (err) {
		throw err; 
		}
		
		let output = JSON.parse(data);
		for (var i = 0; i < output.length; i++) {
			if (input == output[i].name) {
				console.log(output[i].name);
				console.log(output[i].topLevelDomain);
			} 			
		}
	});


