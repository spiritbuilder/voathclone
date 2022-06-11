let express = require("express");
let dotenv = require("dotenv");
let cors = require("cors");
let DB = require("./db/db.js");

let borrowingController = require("./controllers/borrowing");
dotenv.config();
DB._connect();

let port = process.env.PORT || 4000;

let app = express();

app.use(express.json());
app.use(cors());



app.listen(port, console.log(`app listening on ${port}`));
