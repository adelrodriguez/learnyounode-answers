const fs = require('fs');
const path = require('path');

module.exports = function(directory, extension, callback) {
    fs.readdir(directory, function(err, data) {
        if (err) {
            return callback(err);
        } else {
            var testExt = '.' + extension;
            var result = [];
            
            data.forEach(function(file) {
                if (path.extname(file) === testExt) {
                    result.push(file);
                }
            });
            
            callback(null, result);
        }
    });
}