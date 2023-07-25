const axios = require('axios');

const apiKey = 'X86NOH6II01P7R24';
const apiBaseUrl = 'https://www.alphavantage.co/query';

async function getStockInfo(symbol) {
  try {
    const response = await axios.get(apiBaseUrl, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol,
        outputsize: 'compact',
        apikey: apiKey,
      },
    });

    const timeSeriesData = response.data['Time Series (Daily)'];
    const dates = Object.keys(timeSeriesData);
    const latestDate = dates[0];
    const previousDate = dates[1];
    const latestPriceData = timeSeriesData[latestDate];
    const previousPriceData = timeSeriesData[previousDate];

    const stockInfo = {
      symbol,
      openPrice: parseFloat(latestPriceData['1. open']),
      highPrice: parseFloat(latestPriceData['2. high']),
      lowPrice: parseFloat(latestPriceData['3. low']),
      variation: parseFloat(latestPriceData['4. close']) - parseFloat(previousPriceData['4. close']),
    };

    return stockInfo;
  } catch (error) {
    throw new Error('Error fetching stock market data.');
  }
}

module.exports = {
  getStockInfo,
};