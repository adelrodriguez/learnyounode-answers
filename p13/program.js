const http = require("http");
const url = require("url");
const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        var inputURL = url.parse(req.url);
        var currentTime;
        
        if (inputURL.pathname === '/api/parsetime') {
            currentTime = getTime(inputURL.query.slice(4), 'parse'); // slice string after 'iso='
            
        } else if (inputURL.pathname === '/api/unixtime') {
            currentTime = getTime(inputURL.query.slice(4), 'unix');
        }
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(currentTime));
    }
});

function getTime(query, type) {
    
    if (type === 'parse') {
        var date = new Date(query);
        
        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    } else if (type === 'unix') {
        var date = Date.parse(query);
        
        return {
            unixtime: date
        }
    }
    
}

server.listen(port);