import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, Label, Input, Select, FormGroupWrapper } from './styles';

const FormInput = ({
  label,
  hideLabel,
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
      <Label htmlFor={id} className={hideLabel && 'hide'}>
        {label}
      </Label>
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

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  height: PropTypes.string,
};

FormInput.defaultProps = {
  hideLabel: false,
  height: '46',
  disabled: false,
  type: 'text',
  value: '',
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
