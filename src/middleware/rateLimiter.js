const rateLimit = require('express-rate-limit');

// Limite de 10 solicitudes por minuto
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 10,
});

module.exports = limiter;