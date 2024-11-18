const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByUsernameOrEmail = async (req, res) => {
    const { username, email } = req.query;
    try {
      const user = await User.findOne({
        $or: [
          { username: username }, 
          { useremail: email }
        ]
      });
  
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {
  getAllUsers,
  getUserByUsernameOrEmail,
};
