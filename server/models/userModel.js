const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  useremail: { type: String, required: true },
  password: { type: String, required: true },
  usertype: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  curso: { type: String, required: true },
  turma: { type: String, required: true },
  local: { type: String },
  matricula: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
