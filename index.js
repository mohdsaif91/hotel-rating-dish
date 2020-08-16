const express = require("express");
const morgan = require("morgan");
const color = require("colors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

// MONGO_URI=mongodb+srv://saif:saif@cluster0.kpck8.mongodb.net/<expenseTracker>?retryWrites=true&w=majority

app.get("/getUser", (req, res) => {
  res.send("not Yet Created");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Node running on ${PORT}`);
});
