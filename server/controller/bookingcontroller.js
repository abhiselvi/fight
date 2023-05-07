const bookingModel = require("../models/booking");
const flightModel = require("../models/flight");
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
    req.body.passengers.forEach((passenger) => {
      let obj = {
        name: passenger.name,
        age: passenger.age,
        gender: passenger.gender,
        contact: passenger.contact,
        passportId: passenger.passportId,
      };
      passengers.push(obj);
    });
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

exports.getAllFlight=async(req,res)=>{
  try{
    const getAllFlight= await flightModel.find();
    return res.status(400).json({
      status: "success",
      data: {
        getAllFlight,
      },
    });
  }
  catch(err){
    return res.status(400).json({
      status: "failure",
      data: {
        error,
      },
    });
  }
}

exports.getFlight=async(req,res)=>{
  try{
    const getAllFlight= await flightModel.findById(req.params.id);
    return res.status(400).json({
      status: "success",
      data: {
        getAllFlight,
      },
    });
  }
  catch(err){
    return res.status(400).json({
      status: "failure",
      data: {
        error,
      },
    });
  }
}
