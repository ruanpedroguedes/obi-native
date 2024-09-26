const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const loadEnv = require('./config/dotenv');
loadEnv();

const connectDB = require('./config/db');
connectDB();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
