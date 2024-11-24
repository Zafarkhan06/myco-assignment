/* eslint-disable react/prop-types */
import { useState } from 'react';
import Label from './Label';
import ErrorMessage from './ErrorMessage';
import styles from './DatePicker.module.css';

const DatePicker = ({
  label = '',
  onChange,
  labelVariant = 'medium',
  inputClassName = '',
  error = false,
  errorMessage = '',
  placeholder = 'DATE OF BIRTH',
  labelClassName = '',
}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const handleDateChange = (e) => {
    const value = e.target.value;
    setSelectedDate(value);
    if (onChange) onChange(value);
  };
  return (
    <div className={styles.datePicker}>
      {label && (
        <Label
          className={labelClassName}
          text={label}
          variant={labelVariant}
        />
      )}

      <div className={styles.dateInputWrapper}>
        {!selectedDate && !isFocused && (
          <span
            className={`${inputClassName} ${
              error ? 'border border-[#dc3545] border-r-0' : ''
            } ${styles.customPlaceholder} bg-[#2E3846] font-semibold rounded rounded-r-none px-2 py-2 text-white`}
          >
            {placeholder}
          </span>
        )}
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className={` ${
            error ? styles.errorInput : ''
          } ${inputClassName}  bg-[#2E3846] text-white font-semibold px-2 py-2 w-full rounded`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onClick={(e) => e.currentTarget.showPicker()}
          max={today}
        />
      </div>
      {error && errorMessage && <ErrorMessage text={errorMessage} />}
    </div>
  );
};

export default DatePicker;
