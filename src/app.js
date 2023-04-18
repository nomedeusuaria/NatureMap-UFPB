require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("./Database/dbConnect");
const NatureMapRoutes = require("./routes/NatureMapRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect();

app.use(NatureMapRoutes);

module.exports = app;