import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Loading stock data...</p>
    </div>
  );
};

export default LoadingSpinner;
