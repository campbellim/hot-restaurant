var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
//parses url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});


//for new reservations
app.post("/api/reserve", function(req, res) {
  
  var newreservation = req.body;


  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservation);

  reservations.push(newreservation);

  res.json(newreservation);
});

//listening
server.listen(PORT, function() { 
console.log("Server listening on: http://localhost:" + PORT);
})