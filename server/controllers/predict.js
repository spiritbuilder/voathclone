let express = require("express");
const mongoose = require("mongoose");
const user = require("../models/users");
let router = express.Router();
let bcryptjs = require("bcryptjs");
let jwt = require("jsonwebtoken");
const sendMail = require("../utils/mail");

// model.intercept_ : array([-452.74482579])
// model.coef_ : array([[0.15474754]])

router.get("/", (req, res) => {
  console.log("got here");
  try {
    let rainfall = parseFloat(req.body.rainfall);
    if (!isNaN(rainfall)) {
      let prediction =
        1 / (1 + Math.E ** -(-452.74482579 + 0.15474754 * rainfall));
      console.log(prediction);
      let message = "";

      if (prediction >= 0.5) {
        message = `There is a high probability  (${prediction.toFixed(
          7
        )} chance) that there will flooding at a rainfall of ${rainfall} mm`;
      } else {
        message = `There is a low probability (${prediction.toFixed(
          6
        )} chance) that there will flooding at a rainfall of ${rainfall} mm`;
      }

      res.status(200).json({
        prediction: message,
      });
    } else {
      res.status(404).json({ message: "can't kindly provide a valid data" });
    }
  } catch (error) {
    res.status(404).json({ message: "can't kindly provide a valid data" });
  }
});

module.exports = router;
