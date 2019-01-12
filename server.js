var express = require("express");
var path = require("path");
var api = require('./routes/apiRoutes');
var htmlRoute = require('./routes/htmlRoutes');


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