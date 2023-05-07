const express = require("express");
const router = express.Router();
const { addflightdetails } = require("../controller/flightController");
const { protectadmin } = require("../controller/authenticationController");

router.post("/addflight", protectadmin, addflightdetails);
router.get("/:id", protectadmin, addflightdetails);

module.exports = router;
