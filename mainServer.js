
//Dependencies 
const express = require("express");
const path = require("path");

//Setting up Express
const app = express();
const PORT = 3000;

const waitlistBest = [];
const reservationBest = [];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/booking", function(req, res) {
  res.sendFile(path.join(__dirname, "booking.html"));
}); 

app.get("/waitlist", function(req, res) {
  res.sendFile(path.join(__dirname, "waitlist.html"));
}); 



//Data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));









app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  