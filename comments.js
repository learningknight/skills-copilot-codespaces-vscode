// Create web server that can accept any request to any path
// and respond with the word "Hello" and the path you requested.
// For example, if you visit http://localhost:3000/foo/bar, it will
// print out "Hello foo/bar".
//
// You can start the server using `node comments.js` and test it
// using `curl` in another terminal window:
//
//     curl http://localhost:3000/hello
//
// For an extra challenge, make the server return the same response
// for any GET request to any path, using the same technique as the
// previous exercise. 
//
// Hint: use req.url

var http = require('http');
var port = 3000;

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello ' + req.url);
    res.end();
});

server.listen(port);
console.log('Server listening on port ' + port);

