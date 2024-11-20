const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/userModel');

const addNewUser = async () => {
  const newUser = {
    name: 'User Test',
    username: 'userTest',
    useremail: 'usertest@test.com',
    userpassword: 'test123',
    dateOfBirth: new Date('2000-01-01'),
    course: 'Computer Science',
    registrationNumber: '123456',
    userType: 'student',
  };

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const user = await User.create(newUser);
    console.log('Usuário criado com sucesso:', user);

    mongoose.connection.close();
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    mongoose.connection.close();
  }
};

addNewUser();