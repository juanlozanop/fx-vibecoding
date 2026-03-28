import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Stock Dashboard</h1>
      <p className={styles.subtitle}>Real-time stock market data</p>
    </header>
  );
};

export default Header;
