const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("instructors", InstructorSchema);
