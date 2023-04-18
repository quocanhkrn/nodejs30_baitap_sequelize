const express = require("express");
const rootRouter = require("./routers/rootRouter");

const app = express();
app.use(express.json());

app.use("/api", rootRouter);
app.listen(8080);
