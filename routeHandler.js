const express = require("express");
const router = express.Router();
const addData = require("./Controllers/userController");

router.get("/", (req, res) => {
  const data = {
    name: "Shrut",
    mail: "shrutvd@gmail.com",
    contact: 9409743110,
    address: "hello this is my address",
    pincode: 380054,
    password: "password",
  };
  addData(data);
  res.send("Hello from the home route!");
});

router.get("/about", (req, res) => {
  res.send("This is the about page.");
});

module.exports = router;
