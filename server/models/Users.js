const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  username: { type: String, required: true },
  useremail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  usertype: { 
    type: String, 
    enum: ['aluno', 'professor', 'coordenador'],
    required: true 
  },
  dateOfBirth: { type: Date, required: true },
  curso: { type: String, required: true },
  turma: { type: String, required: true },
  local: { type: String, default: '' },
  matricula: { type: String, required: true, unique: true },
}, {
  timestamps: true,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
