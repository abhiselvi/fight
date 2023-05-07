const bookingModel = require("../models/booking");
const flightModel = require("../models/flight");
const moment = require("moment");
const users = require("../models/users");
exports.bookFlight = async (req, res) => {
  try {
    const passengersCount = req.body.passengers.length;
    const flight = await flightModel.findById(req.body.flightId);
    if (!flight || flight.seats <= passengersCount) {
      return res.status(400).json({
        status: "failure",
        data: "seat not available",
      });
    }
    let passengers = [];
    let seatlocation = 0;
    req.body.passengers.forEach((passenger) => {
      let obj = {
        name: passenger.name,
        age: passenger.age,
        gender: passenger.gender,
        contact: passenger.contact,
        passportId: passenger.passportId,
        seatNo: flight.seats - seatlocation,
      };
      seatlocation++;
      passengers.push(obj);
    });

    const updatedflight = await flightModel.findByIdAndUpdate(
      flight._id,
      { $inc: { seats: -passengersCount } },
      { new: true }
    );

    const newBooking = await bookingModel.create({
      flightId: flight._id,
      userId: req.body.userId,
      passengers: passengers,
    });
    return res.status(200).json({
      status: "success",
      data: {
        newBooking,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "failure",
      data: {
        error,
      },
    });
  }
};

exports.getAllFlight = async (req, res) => {
  try {
    const getAllFlight = await flightModel.find();
    return res.status(400).json({
      status: "success",
      data: {
        getAllFlight,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "failure",
      data: {
        error,
      },
    });
  }
};

exports.getFlight = async (req, res) => {
  try {
    const getAllFlight = await flightModel.findById(req.params.id);
    return res.status(400).json({
      status: "success",
      data: {
        getAllFlight,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "failure",
      data: {
        error,
      },
    });
  }
};
exports.searchFlight = async (req, res) => {
  const date = req.query.date;
  const time = req.query.time;
  try {
    let flights;
    if (date && time) {
      const startDateTime = `${date}T${time}.000Z`;
      const endDateTime = `${date}T23:59:59.999Z`;
      flights = await flightModel.find({
        $and: [
          { departuretime: { $gte: new Date(startDateTime) } },
          { departuretime: { $lte: new Date(endDateTime) } },
        ],
      });

      // all flight from paticular date&time

      // flights = await flightModel.find({
      //   departuretime: { $gt: new Date(dateTime) },
      // });
    } else {
      if (date) {
        const startDate = moment(date).startOf("day").toDate();
        const endDate = moment(date).add(1, "day").startOf("day").toDate();
        flights = await flightModel.find({
          departuretime: { $gte: startDate, $lt: endDate },
        });
      }
    }

    return res.status(400).json({
      status: "success",
      data: {
        flights,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "failure",
      data: {
        err,
      },
    });
  }
};
