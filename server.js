//var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
..var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});



app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});



app.post("/api/reserve", function(req, res) {
  
  var newreservation = req.body;


  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservation);

  reservations.push(newreservation);

  res.json(newreservation);
});




server.listen(PORT, function() { 
console.log("Server listening on: http://localhost:" + PORT);