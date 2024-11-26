const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  useremail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Por favor, insira um email válido'],
  },
  userpassword: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  course: {
    type: String,
    required: false,
  },
  registrationNumber: {
    type: String,
    required: false,
  },
  userType: {
    type: String,
    required: true,
    enum: ['student', 'teacher', 'admin'],
  },
  discipline_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discipline',
    },
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);