const flightModel = require("../models/flight");
const bookingModel = require("../models/booking");
const moment = require("moment");

const { bookFlight } = require("./bookingcontroller");

exports.addflightdetails = async (req, res) => {
  try {
    const newflight = await flightModel.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newflight,
      },
    });
  } catch (error) {
    res.send(error);
  }
};

exports.deleteFlight = async (req, res) => {
  try {
    const newflight = await flightModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        newflight,
      },
    });
  } catch (error) {
    res.send(error);
  }
};

exports.getAllBooking = async (req, res) => {
  try {
    const allflight = await bookingModel.find();
    res.status(200).json({
      status: "success",
      data: {
        allflight,
      },
    });
  } catch (error) {
    res.send(error);
  }
};
exports.getByDate = async (req, res) => {
  const date = new Date(req.query.date).toISOString();
  try {
    const startDate = moment(date).startOf("day").toDate();
    const endDate = moment(date).add(1, "day").startOf("day").toDate();
    const filteredflight = await bookingModel.find({
      createdAt: { $gte: startDate, $lt: endDate },
    });

    res.status(200).json({
      status: "success",
      data: {
        filteredflight,
      },
    });
  } catch (error) {
    res.send(error);
  }
};

exports.getById = async (req, res) => {
  try {
    const filteredflight = await bookingModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        filteredflight,
      },
    });
  } catch (error) {
    res.send(error);
  }
};
