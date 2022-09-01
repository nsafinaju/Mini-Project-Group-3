// node.js has a built-in module called HTTP
// allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)
var http = require('http'); // include the HTTP module, use the require() method:

var decimal = require('./converter'); // include converter module

// the HTTP module can create an HTTP server 
// to listens to server ports and gives a response back to the client

// create a server object
http.createServer(function (req, res) {
  res.write(decimal.two_decimal()); // write a response to the client
  res.end(); // end of the response
}).listen(8000); //the server object listens on port 8080


