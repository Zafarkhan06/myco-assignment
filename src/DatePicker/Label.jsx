import React from 'react';
import styles from './DatePicker.module.css';

const Label = ({ text, variant, className = 'text-[#333]' }) => {
  return (
    <label className={`${styles.label} ${className} ${styles[variant]}`}>
      {text}
    </label>
  );
};

export default Label;
