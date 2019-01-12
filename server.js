var express = require("express");
var path = require("path");
<<<<<<< HEAD
var api = require('./routes/apiRoutes')(app);
var htmlRoute = require('./routes/htmlRoutes')(app, path);
=======
var api = require('./routes/apiRoutes');
var htmlRoute = require('./routes/htmlRoutes');

>>>>>>> 84281992724b004e663e635c921081c822037193

var app = express();


//parses url
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Sets up the Express App
// =============================================================

api(app);
htmlRoute(app, path);
var PORT = process.env.PORT || 3000;

//listening
app.listen(PORT, function() { 
console.log("Server listening on: http://localhost:" + PORT);
})