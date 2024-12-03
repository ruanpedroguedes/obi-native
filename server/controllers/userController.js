const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Discipline = require('../models/disciplineModel');

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
    const { userId } = req.params;

    const user = await User.findById(userId).populate('discipline_id');

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.status(200).json({ name: user.name, disciplines: user.discipline_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  getUserDisciplines,
};
