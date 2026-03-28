import React from "react";
import { StockData } from "../../types";
import styles from "./StockCard.module.css";

interface StockCardProps {
  stockData: StockData;
}

const StockCard: React.FC<StockCardProps> = ({ stockData }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
  };

  const isPositiveChange = stockData.change >= 0;

  return (
    <div className={styles.stockCard}>
      <div className={styles.stockHeader}>
        <div className={styles.companyInfo}>
          <h2 className={styles.symbol}>{stockData.symbol}</h2>
          <p className={styles.companyName}>{stockData.companyName}</p>
        </div>
        <div className={styles.priceInfo}>
          <h3 className={styles.currentPrice}>
            {formatCurrency(stockData.currentPrice)}
          </h3>
          <div
            className={`${styles.priceChange} ${
              isPositiveChange ? styles.positive : styles.negative
            }`}
          >
            <span className={styles.changeAmount}>
              {formatCurrency(Math.abs(stockData.change))}
            </span>
            <span className={styles.changePercent}>
              ({formatPercentage(stockData.changePercent)})
            </span>
          </div>
        </div>
      </div>

      <div className={styles.stockDetails}>
        <div className={styles.detailGrid}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Volume</span>
            <span className={styles.value}>
              {stockData.volume.toLocaleString()}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Market Cap</span>
            <span className={styles.value}>{stockData.marketCap}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>P/E Ratio</span>
            <span className={styles.value}>{stockData.peRatio}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Day High</span>
            <span className={styles.value}>
              {formatCurrency(stockData.dayHigh)}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Day Low</span>
            <span className={styles.value}>
              {formatCurrency(stockData.dayLow)}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>52W High</span>
            <span className={styles.value}>
              {formatCurrency(stockData.weekHigh52)}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>52W Low</span>
            <span className={styles.value}>
              {formatCurrency(stockData.weekLow52)}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.lastUpdated}>
        Last updated: {new Date(stockData.lastUpdated).toLocaleString()}
      </div>
    </div>
  );
};

export default StockCard;
