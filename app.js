const express = require("express");
const User = require("./models/userModel");
const mongoose = require("mongoose");
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());

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

// CreateUser route
app.post("/api/v1/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    // console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

// ReadAllUsers route
app.get("/api/v1/users", async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users: users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

// GetUser by id Route
app.get("/api/v1/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

// UpdateUser by id
app.patch("/api/v1/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      updatedData: {
        user: user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

// DeleteUser by id
app.delete("/api/v1/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: `Student with id: ${req.params.id} has been deleted`,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

app.listen(port, process.env.IP, () => {
  console.log(`App is running on port: ${port}`);
});
