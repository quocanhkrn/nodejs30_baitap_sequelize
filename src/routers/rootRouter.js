const express = require("express");
const orderRouter = require("./orderRouter");
const resRateRouter = require("./resRateRouter");
const resLikeRouter = require("./resLikeRouter");

const rootRouter = express.Router();
rootRouter.use("/orders", orderRouter);
rootRouter.use("/restaurants/rate", resRateRouter);
rootRouter.use("/restaurants/like", resLikeRouter);

module.exports = rootRouter;
