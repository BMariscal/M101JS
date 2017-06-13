//consolidate is a set of wrappers for template engines for express
//express requires a certain interface for template libraries, consolidate handles that for us
var express = require('express'),
    app = express(),
    engines = require('consolidate');

//registering the template engine as being associated to the html extension
app.engine('html', engines.nunjucks);

//set the view engine app setting to html (we're going to be using engines.nunjucks engine to render html files)
app.set('view engine', 'html');
//specify where our templates are located
//__dirname, allows is to access the full path to the directory in which this file is stored. Allows us to specify the full path to the views directory as the location for our views used by express when using the nunjcuks template engine
app.set('views', __dirname + '/views');


//use render. 'Templates' is the value for name
app.get('/', function(req, res) {
    res.render('hello', { name : 'Templates' });
});

app.use(function(req, res){
    res.sendStatus(404); 
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s', port);
});
