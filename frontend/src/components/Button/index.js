import React from 'react';

import { Btn } from './styles';

export default function Button({ type, label, size, action }) {
  return (
    <Btn className={`btn-${type} btn-${size}`} onClick={action}>
      {label}
    </Btn>
  );
}
