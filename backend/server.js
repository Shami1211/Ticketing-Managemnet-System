const express = require("express");
const mongoose = require("mongoose");
const RequestRoute = require("./routes/RequestRoutes.js");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

//Routes
app.use("/request", RequestRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
