const http = require("http");
const port = process.argv[2];

const server = http.createServer((req, res) => {
   if (req.method == 'POST') {
       let data = "";
       req.setEncoding('utf8');
       req.on('data', (chunk) => {
           data += chunk.toString().toUpperCase();
       });
       req.on('end', () => {
          res.end(data);
       });
   } else {
       return res.end("We need a POST request over here!\n");
   }
});

server.listen(port);