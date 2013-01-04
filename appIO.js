var util            = require('util'),
    EventEmitter    = require('events').EventEmitter;

var http            = require('http');
var dns             = require('dns');

var server = http.createServer();

var handleReq = function(req,res){

    req.setEncoding('utf8');

    req.on('data', function(data){

        console.log(data);
    });

    res.writeHead(200, {});
    res.end('hello world');
};

server.on('request', handleReq);
server.listen(8080);

server.on('connection', function(request){

    console.log("on connection");
});


// var Server = function() {
//     console.log('init');
// };

// util.inherits(Server, EventEmitter);

// Server.prototype.outputThis = function(output) {
//     console.log(this);
//     console.log(output);
// };


// var s = new Server();

// //s.outputThis("holas");

// s.on('abc', s.outputThis);

// s.emit('abc', s);


console.log(process.memoryUsage());

