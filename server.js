const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose

mongoose.connect("mongodb+srv://admin123:admin123@cluster0.yu8bs6p.mongodb.net/skwergroupDB")

//require route
app.use("/", require("./routes/registrationRoute"))

app.listen(3001, function () {
    console.log("express server is running on port 3001");
})