const express = require("express");
const router = express.Router();
const { bookFlight, getAllFlight,getFlight } = require("../controller/bookingcontroller");
const {
  protectuser,
} = require("../controller/authenticationController");

router.post("/bookflight", protectuser, bookFlight);
router.get("/getallflight", getAllFlight);
router.get("/getflight/:id", getFlight);

module.exports = router;
