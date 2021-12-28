const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      maxLength: 500,
    },
    instructor: [
      {
        type: Schema.Types.ObjectId,
        ref: "instructors",
      },
    ],
    scheduleDateTime: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("courses", CourseSchema);
