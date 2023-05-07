const flightModel = require("../models/flight");

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
      const newflight = await flightModel.findByIdAndDelete(req.params.id)
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