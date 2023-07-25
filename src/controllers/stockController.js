const alphaVantageService = require('../services/alphaVantageService');

async function getStockInfo(req, res) {
  const { symbol } = req.params;

  try {
    const stockInfo = await alphaVantageService.getStockInfo(symbol);
    return res.json(stockInfo);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching stock market data.' });
  }
}

module.exports = {
  getStockInfo,
};