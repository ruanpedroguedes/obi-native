const dotenv = require('dotenv');

const loadEnv = () => {
  dotenv.config();

  if (!process.env.MONGO_URI) {
    console.error("Faltando a variável de ambiente MONGO_URI");
    process.exit(1);
  }
};

module.exports = loadEnv;
