// DEPENDENCIES
let path = require("path");

module.exports = function(app) {

    // Home Page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // For a little fun ;)
    app.get("/error", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/error.html"));
    });

    // Survey Page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};