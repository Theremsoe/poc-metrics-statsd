const http = require('http');
const SDC = require('statsd-client'), sdc = new SDC({host: '127.0.0.1'});

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        const cpu  = Math.random()
        returned_value = sdc.raw(`system.cpu:${cpu.toFixed('3')}|g`)
        console.log(returned_value)
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write('<html><body><p>Random value was stored as a metric value.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
});

server.listen(8000);

console.log('Node.js web server at port 8000 is running..')
