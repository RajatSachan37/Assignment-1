const express = require("express");
const User = require("./models/userModel");
const mongoose = require("mongoose");
const app = express();
// const port = 3000;

const userRouter = require("./routes/userRoutes");

app.use("/api/v1/users", userRouter);

// app.use(express.json());

// const DB = mongodb+srv://Rajat:r15r15@cluster0.s8gqz.mongodb.net/natours?retryWrites=true&w=majority;

mongoose
  .connect(
    "mongodb+srv://Rajat:r15r15@cluster0.s8gqz.mongodb.net/assignment1?retryWrites=true&w=majority"
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
