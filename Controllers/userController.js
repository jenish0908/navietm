const userModel = require("../Database/dbConfig");

const addData = (data) => {
  const newUser = new userModel(data);
  newUser.save((err, user) => {
    if (err) return console.error(err);
    console.log("User saved:", user);
  });
};

module.exports = addData;
