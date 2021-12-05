const express = require("express");
const pool = require("./database");
const app = express();

app.use(express.static(__dirname + "/res/styles"));
app.use(express.static(__dirname + "/res/images"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// register the ejs view engine
app.set("view engine", "ejs");

app.listen(3000);
