const express = require("express");
const router = express.Router();
const {
  addflightdetails,
  deleteFlight,
  getAllBooking,
  getByDate,
  getById
} = require("../controller/flightController");
const { protectadmin } = require("../controller/authenticationController");

router.post("/addflight", protectadmin, addflightdetails);
router.get("/deleteflight/:id", protectadmin, deleteFlight);
router.get("/getallbookdetails", protectadmin, getAllBooking);
router.get("/getbyDate", protectadmin, getByDate);
router.get("/getbyid/:id", protectadmin, getById);
module.exports = router;
