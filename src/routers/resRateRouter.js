const express = require("express");
const { getResRate, rateRes } = require("../controllers/resRateController");
const resRateRouter = express.Router();

resRateRouter.get("/get-rate", getResRate);
resRateRouter.post("/new-rate", rateRes);

module.exports = resRateRouter;
