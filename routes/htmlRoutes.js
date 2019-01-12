<<<<<<< HEAD
module.exports = function(app, path) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
      });
      
      app.get("/reservations", function(req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
      });
      
      app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
      });
}
=======

module.exports = function(app, path){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/reservations", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });
  
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });
}
>>>>>>> 84281992724b004e663e635c921081c822037193
