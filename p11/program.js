const http = require("http");
const fs = require("fs");
const port = process.argv[2];
const path = process.argv[3];

const server = http.createServer((req, res) => {
   var reader = fs.createReadStream(path);
   
   reader.pipe(res);
});

server.listen(port);