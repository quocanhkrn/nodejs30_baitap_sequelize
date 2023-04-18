const express = require("express");
const { createOrder } = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("/create-order", createOrder);

module.exports = orderRouter;
