let express = require("express");
const mongoose = require("mongoose");
const user = require("../models/users");
let router = express.Router();
let bcryptjs = require("bcryptjs");
let jwt = require("jsonwebtoken");
const sendMail = require("../utils/mail");

router.get("/", (req, res) => {
  user
    .find()
    .then((users) => {
      let response = users.map((person) => {
        return { ...person._doc, _id: undefined, password: undefined };
      });
      res.status(200).json(response);
    })
    .catch((e) => res.json({ error: e }));
});

router.post("/signup", async (req, res) => {
  let hashedpassword = await bcryptjs.hash(req.body.password, 10);

  userparams = {
    ...req.body,
    password: hashedpassword,
  };

  let users = await user.findOne({ email: req.body.email });
  if (!users) {
    user
      .create(userparams)
      .then((user) => {
        res.status(200).json({
          message: "user created sucessfully",
          userToken: jwt.sign(
            { ...user, password: undefined, _id: undefined },
            process.env.jwt,
            { expiresIn: "24h" }
          ),
          fullname: `${user.firstname} ${user.lastname}`,
        });

        sendMail({
          receiver: user.email,
          subject: `Agriedge Welcomes you `,
          fullname: user.firstname + " " + user.lastname,
        });
      })
      .catch((e) => {
        console.log(JSON.stringify(e));
        if (e.code === 11000) {
          return res
            .status(400)
            .json({ message: "email has already been used" });
        }
        return res.status(500).json({ message: e });
      });
  } else {
    res.status(400).json({ message: "Email already used by a user" });
  }
});

router.post("/signin", async (req, res) => {
  if (!req.body) {
    res.status(500).json({ message: "Please input email and password" });
  }
  try {
    let users = await user.findOne({ email: req.body.email });
    if (!users) {
      return res
        .status(404)
        .json({ message: "This email has not been registered" });
    }
    console.log(users.password);
    let compareResult = await bcryptjs.compare(req.body.password, users.password);
    if (compareResult) {
      let token = jwt.sign(
        { ...users, password: undefined, _id: undefined },
        process.env.jwt,
        { expiresIn: "24h" }
      );
      return res
        .status(200)
        .json({ fullname: `${users.firstname} ${users.lastname}`, token });
    } else {
      return res.status(400).json({ message: "please input correct password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

router.delete("/", async (req, res) => {
  //   let token = req.headers.Authorization.trim().split(" ")[1];
  //   if (token) {
  //     let { email } = jwt.verify(token, process.env.jwt);
  //     if (email === process.env.adminemail) {
  //       console.log("its me");
  //     }
  //   }
  user
    .deleteMany()
    .then((user) => {
      console.log(user);
      res.status(200).json("all users have been deleted");
    })

    .catch((e) => res.status(400).json({ error: e }));
});
module.exports = router;
