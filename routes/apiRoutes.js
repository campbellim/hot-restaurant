var tables = require("../data/tableData.js");
var waiting = require("../data/waitinglistData.js");
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  app.get("/api/waiting", function(req, res) {
    return res.json(waiting);
  });
  