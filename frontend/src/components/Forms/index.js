import React from 'react';

import { FormControl, Label, Input, Select, FormGroupWrapper } from './styles';

const FormInput = ({
  label,
  id,
  type,
  value,
  placeholder,
  disabled = false,
  onChange,
  height = 46,
}) => {
  return (
    <FormControl>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        height={height}
      />
    </FormControl>
  );
};

const FormSelect = ({
  label,
  id,
  data,
  placeholder,
  disabled = false,
  height = 46,
}) => {
  return (
    <FormControl>
      <Label htmlFor={id}>{label}</Label>
      <Select
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        height={height}>
        {data.map(item => (
          <option key={item.id} value={item.id}>
            {item.value}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

const FormGroup = ({ children }) => {
  return <FormGroupWrapper className="form-group">{children}</FormGroupWrapper>;
};

export { FormInput, FormSelect, FormGroup };
