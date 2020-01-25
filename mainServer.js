
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

app.post("/booking", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  let newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  newReservation.push(reservationBest);

  res.json(newReservation);
});


//Data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));









app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  