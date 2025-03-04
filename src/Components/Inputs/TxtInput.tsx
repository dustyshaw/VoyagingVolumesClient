import React, { useState } from 'react';

interface ReusableInputProps {
  label: string;
  placeholder: string;
  error: string;
  type: string;
  required: boolean;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void; // Update onChange type
}

const ReusableInput: React.FC<ReusableInputProps> = ({ label, placeholder, error, type, required, id, onChange, ...otherProps }) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setIsEmpty(newValue.length === 0);
    onChange(event, newValue); // Send the event and the new value to the parent
  };

  const handleFieldTouched = () => {
    setIsTouched(true);
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        className="form-control"
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={handleFieldTouched}
        placeholder={placeholder}
        required={required}
        {...otherProps}
      />
      {error && isTouched && isEmpty && <div className="error-message text-danger">{error}</div>}
    </div>
  );
}

export default ReusableInput;
