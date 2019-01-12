var tables = require("tables");
var waiting = require("waiting")
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  app.get("/api/waiting", function(req, res) {
    return res.json(waiting);
  });
  