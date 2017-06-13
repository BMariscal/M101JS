//use express module to create express app, with which to register routes in our application
var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

//guarantees that routes not handled above will be handled here
app.use(function(req, res){
    res.sendStatus(404); 
});

//set up app to listen for client connections
var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s', port);
});
