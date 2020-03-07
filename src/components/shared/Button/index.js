import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './styles';

function Button(props) {
  const {
    type,
    block,
    level,
    label,
    size,
    onClick,
    iconLeft,
    iconRight,
  } = props;
  return (
    <Btn
      {...props}
      type={type}
      className={`btn-${level} btn-${size} ${block && 'block'}`}
      onClick={onClick}>
      {iconLeft}
      <span>{label}</span>
      {iconRight}
    </Btn>
  );
}

export default React.memo(Button);

Button.propTypes = {
  type: PropTypes.string,
  level: PropTypes.string,
  block: PropTypes.bool,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.any.isRequired,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  level: 'primary',
  size: 'md',
  block: false,
  iconLeft: null,
  iconRight: null,
};
