import React, { useState } from "react";
import styles from "./DatePicker.module.css";


const DateInput = ({ value, onChange, className, placeholder, placeholderClassName }) => {
  const [isFocused, setIsFocused] = useState(false);
  const today = new Date().toISOString().split("T")[0];
console.log("the value is: ", className)
  return (
    <>
      <div className={styles.dateInputWrapper}>
        {!value && !isFocused && (
          <span className={`${styles.placeholderClassName}`}>{placeholder}</span>
        )}
        <input
          type="date"
          value={value}
          onChange={onChange}
          className={` ${className} ${styles.dateInput}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onClick={(e) => e.currentTarget.showPicker()}
          max={today}
        />
      </div>
    </>
  );
};

export default DateInput;
