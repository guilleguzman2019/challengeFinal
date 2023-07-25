//const apiKeys = require('../models/user');

const user = require('../models/user');

async function signUp(req, res) {
  const { name, lastName, email } = req.body;
  if (!name || !lastName || !email) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {

    const apiKey = Math.random().toString(36).substring(7);
    const userId = await user.createUser(name, lastName, email, apiKey);
    //apiKeys[apiKey] = { name, lastName, email };
    return res.json({ apiKey });

  }
  catch(error){
    return res.status(500).json({ error: 'Error creating user.' });
  }
}

module.exports = {
  signUp,
};