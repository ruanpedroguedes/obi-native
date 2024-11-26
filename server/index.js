const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const loadEnv = require('./config/dotenv');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');

loadEnv();
connectDB();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/user', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
