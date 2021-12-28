const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParticipantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      maxLength: 50,
      required: false,
    },
    phone: {
      type: Number,
      maxLength: 13,
      required: false,
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "courses",
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("participants", ParticipantSchema);
