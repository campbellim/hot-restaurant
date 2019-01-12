
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