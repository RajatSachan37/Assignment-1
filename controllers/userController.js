const User = require("./../models/userModel");

// CreateUser route
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
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
};

// ReadAllUsers route
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "name id contact");
    // console.log(users);
    // console.log(req.body);
    // object destructuring
    // all users Api should give only id, name and contact

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
};

// GetUser by id Route
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(
      req.params.id,
      "name contact id email address"
    );

    //individual user APi should give id, name, contact, email, address
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
};

// UpdateUser by id
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // console.log(req.body);
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
};

// DeleteUser by id
exports.deleteUser = async (req, res) => {
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
};
