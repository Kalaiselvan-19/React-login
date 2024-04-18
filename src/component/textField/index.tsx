import React from "react";

type CustomTextFieldProps = {
  type: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  type,
  value,
  onChange,
  required = false,
  name,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
    />
  );
};

export default CustomTextField;
