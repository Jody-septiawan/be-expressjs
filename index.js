const express = require("express");

const app = express();
const router = require("./src/routes");

app.use(express.json());

app.use("/api/v1", router);

app.listen(5000, () => console.log(`Running on Port: 5000`));
