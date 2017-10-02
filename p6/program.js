const myModule = require("./module.js");
const inputDir = process.argv[2];
const inputExt = process.argv[3];

function callbackFunc(err, data) {
    if (err) {
        console.log(err);
    } else {
        data.forEach(function(file) {
            console.log(file);
        });
    }
}

myModule(inputDir, inputExt, callbackFunc);