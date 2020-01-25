//Dependencies 
const express = require("express");
const path = require("path");

//Setting up Express
const app = express();
const PORT = 3000;

const waitlistBest = [];
const reservationBest = [];


//Data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());









app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });