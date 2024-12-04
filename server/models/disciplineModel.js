const mongoose = require('mongoose');

const disciplineSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  turma: {
    type: String,
    required: true,
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
  curso: {
    type: String,
    required: false,
  },
  unidade: {
    type: String,
    required: false,
  },
}, { collection: 'disciplinas' });

module.exports = mongoose.model('Discipline', disciplineSchema);