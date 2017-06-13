var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
    bodyParser = require('body-parser');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//register express body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Handler for internal server errors (error handling middleware)
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).render('error_template', { error: err });
}

app.get('/', function(req, res, next) {
    res.render('movieEntries', { 'movies' : [ 'title', 'year', 'imdb']});
});

app.post('/favorite_movie', function(req, res, next) {
    var favorite = req.body.movie;
    console.log(favorite.length)
    //handles error handling middleware (errorHandler function above)
    if (favorite[0].length === 0 || favorite[1].length === 0 || favorite[2].length === 0) {
        next('Please enter a movie title, year and imdb id!');
    }
    else {
        res.send(`Your favorite movie is ${favorite[0]}. This movie came out in ${favorite[1]}`);
    }
});

app.use(errorHandler);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log(`Express server listening on port ${port}`);
});
