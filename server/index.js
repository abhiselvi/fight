const mongoose = require("mongoose"); //Third party module
const express = require("express"); //Third party module
const auth = require("./routes/autentication.js");
const user = require("./routes/booking.js");
const admin = require("./routes/flight.js");
const app = express();
app.use(express.json());
require("dotenv").config();

mongoose
  .connect(process.env.link)
  .then(() => {
    console.log("succ");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/user", user);

app.listen(3000, (req, res) => {
  console.log("Connected succesfully");
});
