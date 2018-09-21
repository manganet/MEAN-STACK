const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");
// DB Config
const db = require("./config/database").database;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
const app = express();
const users = require("./routes/users");
// Port Number
const port = 3000;
// CORS Middleware
app.use(cors());
// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));
// Body Parser Middleware
app.use(bodyParser.json());
app.use("/users", users);
// Index Route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});
// Start Server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
