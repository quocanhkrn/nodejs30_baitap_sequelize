const express = require("express");
const { getResLike, likeRes } = require("../controllers/resLikeController");
const resLikeRouter = express.Router();

resLikeRouter.get("/get-like", getResLike);
resLikeRouter.post("/new-like", likeRes);

module.exports = resLikeRouter;
