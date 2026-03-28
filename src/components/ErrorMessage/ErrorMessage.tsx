import React from "react";
import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = "Failed to load stock data",
}) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorMessage;
