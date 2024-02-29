const express = require("express");

const router = express.Router();

const User = require("../modals/user");

router.post("/subscription", async (req, res) => {
  const { email } = req.body;
console.log(req.body)
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newUser = new User({ email });

    await newUser.save();

    res.status(201).json({ message: "Email saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports= router;