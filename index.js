const express = require("express");
const app = express();
const routes = require("./routeHandler");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server Started at port : 3000");
});
