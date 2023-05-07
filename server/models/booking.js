const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  seatNo: {
    type: Number,
  },
  passportId: {
    type: String,
    required: function () {
      return !this.aadharId;
    },
  },
  aadharId: {
    type: String,
    required: function () {
      return !this.passportId;
    },
  },
});

const bookingSchema = new Schema(
  {
    flightId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    passengers: [passengerSchema],
  },
  { timestamps: true }
);

const booking = mongoose.model("bookings", bookingSchema);
module.exports = booking;
