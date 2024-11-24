import React from "react";
import styles from "./DatePicker.module.css";

const ErrorMessage = ({ text }) => {
  return <p className={styles.errorMessage}>{text}</p>;
};

export default ErrorMessage;
