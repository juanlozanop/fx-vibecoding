import React, { useState, useEffect } from "react";
import { StockData } from "./types";
import {
  Header,
  LoadingSpinner,
  StockCard,
  BarChart,
  ErrorMessage,
} from "./components";
import nvdaData from "./data/nvda-stock.json";
import "./App.css";

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

  if (loading) {
    return (
      <div className="app">
        <Header />
        <LoadingSpinner />
      </div>
    );
  }

  if (!stockData) {
    return (
      <div className="app">
        <Header />
        <ErrorMessage />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <StockCard stockData={stockData} />
        <div className="chart-section">
          <BarChart stockData={stockData} />
        </div>
      </main>
    </div>
  );
};

export default App;
