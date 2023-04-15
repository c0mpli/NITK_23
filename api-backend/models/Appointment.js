const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    doctorEmail: {
      type: String,
      required: true,
    },
    // doctorInfo: {
    //   type: Object,
    //   required: true,
    // },
    // userInfo: {
    //   type: Object,
    //   required: true,
    // },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const appointmentModel = mongoose.model("Appointment", appointmentSchema);
module.exports = appointmentModel;
