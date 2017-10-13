//Part II : File I/O Practice: Country Information App
// This is de created JSON Parser module


const fs = require('fs');


let parser = function (file, callback) {

	fs.readFile(file, function (err, data) { 
    	if (err) {
		throw err; 
		}
		
		let parsed = JSON.parse(data);
		callback(parsed);	

	});
}


module.exports = parser;