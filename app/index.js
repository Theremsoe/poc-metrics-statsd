const http = require('http');
const SDC = require('statsd-client'), sdc = new SDC({host: 'statsd.example.com'});

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        const cpu  = Math.random()
        sdc.raw(`system.cpu:${cpu}|g`)
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write('<html><body><p>Random value was stored.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');

});

server.listen(8000);

console.log('Node.js web server at port 8000 is running..')
