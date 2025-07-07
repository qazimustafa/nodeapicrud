const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Create the User model
const User = mongoose.model('User', UserSchema);

module.exports = User;
