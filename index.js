const express = require("express");
const connection = require("./config/db");
const userRoutes = require("./routes/user.routes");
const cors = require("cors");
const port = 8080
const app = express();
app.use(express.json());
app.use(cors({origin:"*"}))

// for user
app.use("/user", userRoutes);
app.listen(port, async () => {
  try {
    await connection;
    console.log("listening on port " + port);
  } catch (err) {
    console.log(err);
  }
});
