const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));

// Rutas
//const stockRoutes = require('./routes/stockRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/stock', require('./routes/stockRoutes'));
app.use('/signup', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});