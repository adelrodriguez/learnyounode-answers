const fs = require('fs');
const path = require('path');
var inputDir = process.argv[2];
var inputExt = '.' + process.argv[3];

fs.readdir(inputDir, function(err, files) {
    if (err) {
        console.log(err);
    } else {
        files.forEach(function(file) {
            if (path.extname(file) === inputExt) {
                console.log(file);
            }
        });
    }
});