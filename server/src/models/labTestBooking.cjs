const mongoose = require('mongoose');

const labTestBookingSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  labTestName: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
  },
});

module.exports = mongoose.model('LabTestBooking', labTestBookingSchema);
