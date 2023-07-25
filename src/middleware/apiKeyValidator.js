const user = require('../models/user');

async function apiKeyValidator(req, res, next) {
  const apiKey = req.header('x-api-key');
  if (!apiKey) {
    return res.status(401).json({ error: 'API key is missing.' });
  }

  try {
    const userData = await user.findUserByApiKey(apiKey);
    if (!userData) {
      return res.status(401).json({ error: 'API key is not valid.' });
    }
    // Si la clave API es válida, puedes almacenar los datos del usuario en la solicitud para usarlos en otras rutas si es necesario.
    req.user = userData;
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Error validating API key.' });
  }
}

module.exports = apiKeyValidator;