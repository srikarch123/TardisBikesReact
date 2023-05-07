const express = require("express");
const router = express.Router();
const user = require("../Models/user");

router.post("/", async (req, res) => {
  let user_ins = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password,
    address: req.body.address,
    dob: req.body.dob,
    gender: req.body.gender,
  };
  console.log(user_ins);
  user(user_ins).save((err, result) => {
    if (err) console.log(err);
    res.status(201).json(result);
  });
});

module.exports = router;