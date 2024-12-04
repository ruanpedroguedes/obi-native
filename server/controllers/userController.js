const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Discipline = require('../models/disciplineModel');
const mongoose = require('mongoose');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ useremail: email });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        useremail: user.useremail,
        usertype: user.usertype,
      },
    });
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    res.status(500).json({ error: error.message });
  }
};

const getUserDisciplines = async (req, res) => {
  try {
    const { id: userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'ID do usuário inválido' });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const userClass = user.turma;

    const disciplines = await Discipline.find({ turma: userClass });

    res.status(200).json({ user: {
      nome: user.username,
    },disciplines });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disciplinas' });
  }
};

module.exports = {
  loginUser,
  getUserDisciplines,
};
