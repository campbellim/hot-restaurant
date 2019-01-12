var express = require("express");
var path = require("path");
var api = require('./routes/apiRoutes');
var htmlRoute = require('./routes/htmlRoutes');

// Sets up the Express App
// =============================================================
var app = express();
api(app);
htmlRoute(app);
var PORT = process.env.PORT || 3000;
//parses url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//listening
app.listen(PORT, function() { 
console.log("Server listening on: http://localhost:" + PORT);
})