const http = require('http');
//const httpStatus = require('http-status-codes');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    /*
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();

    */

    fs.readFile('index.html', (err, data) => {
        if (err) {
            // If there was an error reading the file, send a 500 error response
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading index.html');
        } else {
            // If the file was read successfully, send the HTML contents with a 200 OK status
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
