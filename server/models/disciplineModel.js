const mongoose = require('mongoose');

const disciplineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
}, { collection: 'disciplines' });

module.exports = mongoose.model('Discipline', disciplineSchema);