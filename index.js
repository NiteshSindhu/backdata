const express = require("express");
const connection = require("./config/db");
const userRoutes = require("./routes/user.routes");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT ||9000
const app = express();
app.use(express.json());
app.use(cors({origin:"*"}))

// for user
app.use("/user", userRoutes);
app.get("/", (req,res) => {
  res.send("Welcome");
})
app.listen(port, async () => {
  try {
    await connection;
    console.log("listening on port " + port);
  } catch (err) {
    console.log(err);
  }
});
