var fs = require('fs');
var inputFile = process.argv[2];

fs.readFile(inputFile, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var content = data.toString().split('\n');

        console.log(content.length - 1); // remove one since the last line does not have a newline character
    }
});