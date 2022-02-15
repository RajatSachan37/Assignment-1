const express = require("express");
const mongoose = require("mongoose");
const app = express();

const userRouter = require("./routes/userRoutes");

app.use("/api/v1/users", userRouter);

// app.use(express.json());


mongoose
  .connect(
    "<INSERT MONGODB CONNECTION STRING HERE>"
  )
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log(err);
  });

//   CRUD = create read update delete

app.get("/", (req, res) => {
  res.send("Assignment 1");
});

app.all("*", (req, res) => {
  res.send(`Can't find ${req.originalUrl} on this server`);
});

const port = 3000; //process.env.PORT=> port for heroku

app.listen(port, process.env.IP, () => {
  console.log(`App is running on port: 3000`);
});
