const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/InternShalaDBex";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const internShalaRouter = require("./routes/internShalas");
app.use("/internShalas", internShalaRouter);

app.listen(9000, () => {
  console.log("Server started");
});
