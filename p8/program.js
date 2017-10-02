const http = require("http");
var url = process.argv[2];

http.get(url, (res) => {
   res.setEncoding('utf8');
   let data = '';
   res.on('data', (chunk) => {
       data += chunk;
   });
   res.on('end', () => {
       console.log(data.length);
       console.log(data);
   });
});