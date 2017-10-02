const net = require("net");
const port = process.argv[2];

const server = net.createServer((socket) => {
    var data = getDate();
    
    socket.end(data);
});

server.listen(port);

function zeroFill(obj) {
    for (var i in obj) {
        obj[i] = (obj[i] < 10 ? '0' : '') + obj[i];
    }
    
    return obj;
}

function getDate() {
    var date    = new Date();
    var current = {
        year:   date.getFullYear(),
        month:  date.getMonth() + 1,
        day:    date.getDate(),
        hour:   date.getHours(),
        min:    date.getMinutes()
    };
    
    current = zeroFill(current);
    
    var formattedDate = current.year + '-' + current.month + '-' + current.day + ' ' + current.hour + ':' + current.min + '\n';
    
    return formattedDate;
}