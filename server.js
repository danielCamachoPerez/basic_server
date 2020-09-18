const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const app = express();

//database
require("./database");

//port
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log("server on port: " + app.get("port"));
});

//middleware
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));

//print screen Hi
app.get("/", (req, res) => {
    res.send("Hi from Express");
});