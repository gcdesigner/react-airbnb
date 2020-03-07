import React from 'react';

import { Container } from './styles';

function FormGroup({ children }) {
  return <Container>{children}</Container>;
}

export default React.memo(FormGroup);
