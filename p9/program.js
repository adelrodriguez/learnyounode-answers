const http = require("http");
var results = [];
var count = 0;

function printData() {
	for (var i = 0; i < results.length; i++) {
		console.log(results[i]);
	}
}

function getContent(index) {
	http.get(process.argv[2 + index], (res) => {
		res.setEncoding('utf8');
		var data = '';
		res.on('data', (chunk) => { data += chunk; });
		res.on('end', () => {
		    results[index] = data;
		    count++;

		    if (count === 3) {
		        printData();
	        }
		});
	});
	
}

for (var i = 0; i < 3; i++) {
	getContent(i);
}
