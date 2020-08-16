const express = require("express");
const morgan = require("morgan");
const color = require("colors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

// MONGO_URI=mongodb+srv://saif:saif@cluster0.kpck8.mongodb.net/<expenseTracker>?retryWrites=true&w=majority

app.get("/getUser", (req, res) => {
  res.send("not Yet Created");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Node running on ${PORT}`);
});
