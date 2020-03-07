import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '~/components/shared/Forms/FormGroup';
import Label from '~/components/shared/Forms/Label';

import { FormInput } from './styles';

function Input(props) {
  const { label, hideLabel, name } = props;

  return (
    <FormGroup>
      <Label htmlFor={name} className={hideLabel && 'hide'}>
        {label}
      </Label>
      <FormInput {...props} id={name} name={name} />
    </FormGroup>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  height: PropTypes.number,
};

FormInput.defaultProps = {
  hideLabel: false,
  disabled: false,
  type: 'text',
};

export default React.memo(Input);
