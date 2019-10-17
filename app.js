var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

console.log(res);

app.listen(4000);




