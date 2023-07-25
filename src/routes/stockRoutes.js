const express = require('express');
const router = express.Router();

const stockController = require('../controllers/stockController');
const apiKeyValidator = require('../middleware/apiKeyValidator');

router.get('/:symbol', apiKeyValidator, stockController.getStockInfo);

module.exports = router;