var http            = require('http');

var options = {
    host: 'localhost',
    port: 8080,
    path: '/submit',
    method: 'POST'
};
var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.write("my data");
req.write("more of my data");

req.end();