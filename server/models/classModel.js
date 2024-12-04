const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
}, { collection: 'classes' });

module.exports = mongoose.model('Class', classSchema);