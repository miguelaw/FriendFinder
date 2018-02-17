// DEPENDENCIES
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

// Creating an "express" server
var app = express();

// Sets a port.
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Accesing the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
    console.log("App is listening on PORT: ", PORT);
});
