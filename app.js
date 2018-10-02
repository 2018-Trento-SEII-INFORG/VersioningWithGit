/*
* server.js
* In this example we see how to create a simple server.
*/
var express = require('express');
var app = express();
var port = 3000;

// Handling GET requests
app.get('/hello', function(req, res){ 
    res.send('Hello World!'); 
    res.send(request.url);
  });
  
app.use('/hello', express.static('cartella'));
  
app.listen(port, function() {
console.log('Server running on port ', port);
});

console.log("Server started, listening on port", port);
