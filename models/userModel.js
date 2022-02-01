const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student's name is required"],
    },
    email: {
      type: String,
      required: [true, "Student's Email is required"],
      unique: true,
      lowercase: true,
    },
    contact: {
      type: Number,
      required: [true, "Student's contact number is required"],
    },
    address: {
      type: String,
    },
  }
  // { versionKey: false }
);

// Duplicate the ID field.
// userSchema.virtual("id").get(function () {
//   return this._id.toHexString();
// });

// Ensure virtual fields are serialised.
// userSchema.set("toJSON", {
//   virtuals: true,
// });

userSchema.set("toJSON", {
  virtuals: true,
  // versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
