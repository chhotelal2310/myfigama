const mongoose = require("mongoose");

const validateEmail = function(email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validateEmail, "Please enter a valid email"],
    unique: true,
  },
});

const User= mongoose.model("User", userSchema);
module.exports=User;