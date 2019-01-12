var tables = require("../data/tableData");
var waiting = require("../data/waitinglistData");
// var express = require("express");
// var app = express();

module.exports = function(app){
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  app.get("/api/waiting", function(req, res) {
    return res.json(waiting);
  });
  

//for new reservations
app.post("/api/reserve", function(req, res) {
  
  var newreservation = req.body;


  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservation);

  reservations.push(newreservation);

  res.json(newreservation);
});
}


