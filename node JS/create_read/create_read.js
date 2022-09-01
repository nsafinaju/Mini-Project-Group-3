var http = require('http');
var fs = require('fs'); // include the File System module

// create a new file using the writeFile() method:
fs.writeFile(
    'content.txt', 
    'Hello everyone! Have a nice day! We are from Group 3.', 
    function(err) {
        if (err) throw err;
    }
);

// read content.txt file
http.createServer(function (req, res) {
    fs.readFile('content.txt', function(err, data) {
        res.write(data);
        return res.end();
    });
}).listen(8080);




