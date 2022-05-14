const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://doctor_admin:<password>@cluster0.lkqwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.send("Hello From Doctor Portal!");
});

app.listen(port, () => {
  console.log(`Doctors app listening on port ${port}`);
});
