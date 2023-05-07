const express = require("express");
const router = express.Router();
const { bookFlight, getAllFlight,getFlight,searchFlight } = require("../controller/bookingcontroller");
const {
  protectuser,
} = require("../controller/authenticationController");

router.post("/bookflight", protectuser, bookFlight);
router.get("/getallflight", getAllFlight);
router.get("/getflight/:id", getFlight);
router.get("/searchflight", searchFlight);

module.exports = router;
