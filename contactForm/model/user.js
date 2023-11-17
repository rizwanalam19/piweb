const mongoose = require("mongoose");

const enquiry = new mongoose.Schema({

  Name: {
    type: String,
    required: true,
  },
  Company: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  other: {
    type: String,
    required: false,
  }


});

const user_enquiries = new mongoose.model("userdata", enquiry);

module.exports = user_enquiries;