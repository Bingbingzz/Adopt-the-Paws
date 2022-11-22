const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
require('dotenv').config()
const animalRouter = require("./routes/animalRoutes.js");


const db = express();
db.use(express.json());

mongoose.connect(process.env.pawsURI, {useNewUrlParser: true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

db.use(animalRouter);

db.listen(3000, () => {
    console.log("Server is running...");
  });
  
