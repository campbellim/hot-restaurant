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
  var newtable = req.body;
//newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();
  console.log(newtable);
  reservationDestination(newtable, res);
});

function reservationDestination(newtable, res) {
  if(tables.length < 5) {
    tables.push(newtable);
  }
  else {
    waiting.push(newtable);
  }
  res.json(newtable);
}
}


