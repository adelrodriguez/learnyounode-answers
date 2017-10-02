var fs = require('fs');
var inputFile = process.argv[2];

var buffer = fs.readFileSync(inputFile);
var content = buffer.toString();

var arr = content.split('\n');

console.log(arr.length - 1); // remove one since the last line does not have a newline character