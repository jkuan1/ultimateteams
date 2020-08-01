/* This is the Main Page
Currently, it only takes you to the sample.js when a get request is
nade for that */
const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

var express = require('express')
var app = express()


//This part creates the server and displays the date and time
const server = http.createServer((req,res) => {
    res.statusCOde = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(Date());
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//This is the part that I think makes url/sample take me to sample.js
app.get('/sample', function (req, res) {
    res.send('Getting sample code');
    res.redirect('/sample.js');
  })