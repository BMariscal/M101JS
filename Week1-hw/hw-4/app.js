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

MongoClient.connect('mongodb://localhost:27017/movies', function(err, db) {
    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

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

        if (favorite[0].length === 0 || favorite[1].length === 0 || favorite[2].length === 0) {
            next('Please enter a movie title, year and imdb id!');
        }
        else {

            db.collection('favoriteMovies').insert({"title": favorite[0], "year": parseInt(favorite[1]), "imdb": favorite[2]})
            res.send(`Your favorite movie is ${favorite[0]}. This movie came out in ${favorite[1]}`);
        }
    });
    app.get('/my_movies', function(req, res){

        db.collection('favoriteMovies').find({}).toArray(function(err, docs) {
            res.render('favoriteMovies', { 'movies': docs } );
        });

    });



    app.use(errorHandler);

    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log(`Express server listening on port ${port}`);
    });
});
