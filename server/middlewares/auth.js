let jwt = require("jsonwebtoken");
let route = require("express").Router;

async function verify(req, res, next) {
  console.log("seen");

  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.trim().split(" ")[1];
  }

  if (token) {
    try {
      let person = await jwt.verify(token, process.env.jwt);
      req.body.user_id = person._doc._id;
    } catch (error) {
      return res
        .status(400)
        .json({ message: "invalid token please sign in again" });
    }

    next();
  } else {
    res.status(401).json({ message: "please sign in first" });
  }
}

module.exports = verify;
