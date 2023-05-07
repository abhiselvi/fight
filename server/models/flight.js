const mongoose = require("mongoose");
const validator = require("validator");

const flightSchema = new mongoose.Schema({
  flightname: {
    type: String,
    required: [true, "Please enter FlightName"],
  },
  flightid: {
    type: String,
    required: [true, "Please enter FlightId"],
    unique: true,
  },
  seats: {
    type: Number,
    required: [true, "Please enter total number of seats"],
  },
  from: {
    type: String,
    required: [true, "Please enter from address"],
  },
  to: {
    type: String,
    required: [true, "please enter to address"],
  },
  departuretime: {
    type: Date,
    required: [true, "please enter departure time"],
  },
  landingtime: {
    type: Date,
    required: [true, "please enter landing time"],
  },
  duration: {
    type: Date,
    required: [true, "please enter the total duration"],
  },
});



const flight = mongoose.model("flights", flightSchema);

module.exports = flight;
