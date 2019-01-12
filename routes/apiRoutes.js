<<<<<<< HEAD
var tables = require("../data/tableData");
var waiting = require("../data/waitinglistData");

module.exports = function(app){
  app.get("/api/tables", function(req, res) {
=======
var tables = require("../data/tableData.js");
var waiting = require("../data/waitinglistData.js");
app.get("/api/tables", function(req, res) {
>>>>>>> 6b09d5d99adfdcae4b64b3f4fabaa814c5ad357a
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


