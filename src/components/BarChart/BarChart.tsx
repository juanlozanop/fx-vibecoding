import React from "react";
import { StockData } from "../../types";
import styles from "./BarChart.module.css";

interface BarChartProps {
  stockData: StockData;
}

const BarChart: React.FC<BarChartProps> = ({ stockData }) => {
  const chartData = [
    {
      label: "Current Price",
      value: stockData.currentPrice,
      color: "#3b82f6",
      isHighlight: true,
    },
    {
      label: "Day High",
      value: stockData.dayHigh,
      color: "#10b981",
      isHighlight: false,
    },
    {
      label: "Day Low",
      value: stockData.dayLow,
      color: "#f59e0b",
      isHighlight: false,
    },
    {
      label: "52W High",
      value: stockData.weekHigh52,
      color: "#059669",
      isHighlight: false,
    },
    {
      label: "52W Low",
      value: stockData.weekLow52,
      color: "#dc2626",
      isHighlight: false,
    },
  ];

  const maxValue = Math.max(...chartData.map((item) => item.value));
  const minValue = Math.min(...chartData.map((item) => item.value));
  const range = maxValue - minValue;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div className={styles.barChart}>
      <h3 className={styles.chartTitle}>Price Analysis</h3>
      <div className={styles.chartContainer}>
        {chartData.map((item, index) => {
          const heightPercentage = ((item.value - minValue) / range) * 100;
          const adjustedHeight = Math.max(30, heightPercentage); // Minimum 30% height for visibility

          return (
            <div key={index} className={styles.barItem}>
              <div
                className={`${styles.bar} ${
                  item.isHighlight ? styles.highlight : ""
                }`}
                style={{
                  height: `${adjustedHeight}%`,
                  backgroundColor: item.color,
                }}
              >
                <div className={styles.barValue}>
                  {formatCurrency(item.value)}
                </div>
              </div>
              <div className={styles.barLabel}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;
