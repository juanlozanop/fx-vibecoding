import React, { useState, useEffect } from 'react';
import './App.css';
import nvdaData from './data/nvda-stock.json';

interface StockData {
  symbol: string;
  companyName: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
  peRatio: number;
  dayHigh: number;
  dayLow: number;
  weekHigh52: number;
  weekLow52: number;
  lastUpdated: string;
}

const App: React.FC = () => {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with dummy data
    setTimeout(() => {
      setStockData(nvdaData);
      setLoading(false);
    }, 1000);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading stock data...</p>
      </div>
    );
  }

  if (!stockData) {
    return <div className="error">Failed to load stock data</div>;
  }

  const isPositiveChange = stockData.change >= 0;

  return (
    <div className="app">
      <header className="header">
        <h1>Stock Dashboard</h1>
        <p className="subtitle">Real-time stock market data</p>
      </header>

      <main className="main-content">
        <div className="stock-card">
          <div className="stock-header">
            <div className="company-info">
              <h2 className="symbol">{stockData.symbol}</h2>
              <p className="company-name">{stockData.companyName}</p>
            </div>
            <div className="price-info">
              <h3 className="current-price">{formatCurrency(stockData.currentPrice)}</h3>
              <div className={`price-change ${isPositiveChange ? 'positive' : 'negative'}`}>
                <span className="change-amount">{formatCurrency(Math.abs(stockData.change))}</span>
                <span className="change-percent">({formatPercentage(stockData.changePercent)})</span>
              </div>
            </div>
          </div>

          <div className="stock-details">
            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">Volume</span>
                <span className="value">{stockData.volume.toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <span className="label">Market Cap</span>
                <span className="value">{stockData.marketCap}</span>
              </div>
              <div className="detail-item">
                <span className="label">P/E Ratio</span>
                <span className="value">{stockData.peRatio}</span>
              </div>
              <div className="detail-item">
                <span className="label">Day High</span>
                <span className="value">{formatCurrency(stockData.dayHigh)}</span>
              </div>
              <div className="detail-item">
                <span className="label">Day Low</span>
                <span className="value">{formatCurrency(stockData.dayLow)}</span>
              </div>
              <div className="detail-item">
                <span className="label">52W High</span>
                <span className="value">{formatCurrency(stockData.weekHigh52)}</span>
              </div>
              <div className="detail-item">
                <span className="label">52W Low</span>
                <span className="value">{formatCurrency(stockData.weekLow52)}</span>
              </div>
            </div>
          </div>

          <div className="last-updated">
            Last updated: {new Date(stockData.lastUpdated).toLocaleString()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;