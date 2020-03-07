import React from 'react';
import PropTypes from 'prop-types';

import { FiChevronDown } from 'react-icons/fi';
import Label from '../Label';
import FromGroup from '../FormGroup';

import { Container, FormSelect } from './styles';

function Select(props) {
  const { label, name, data, placeholder, disabled, onChange } = props;

  return (
    <FromGroup>
      <Label htmlFor={name}>{label}</Label>
      <Container>
        <FormSelect
          id={name}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}>
          {data.map(item => (
            <option key={item.id} value={item.id}>
              {item.value}
            </option>
          ))}
        </FormSelect>
        <FiChevronDown color="#484848" size={25} />
      </Container>
    </FromGroup>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  placeholder: null,
  disabled: false,
  height: 46,
};

export default React.memo(Select);
