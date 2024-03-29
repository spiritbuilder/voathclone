let express = require("express");
let dotenv = require("dotenv");
let cors = require("cors");
let DB = require("./db/db.js");
let userController = require("./controllers/user");
let auth = require("./middlewares/auth");
let predict = require("./controllers/predict")

dotenv.config();
DB._connect();

let port = process.env.PORT || 4000;

let app = express();

app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).json("welcome to Agriedge");
});
app.use("/api/v1/auth", userController);

app.use("/api/v1/predict",predict)

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(port, console.log(`app listening on ${port}`));


module.exports = app