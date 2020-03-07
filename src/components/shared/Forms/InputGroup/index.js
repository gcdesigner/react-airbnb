import React from 'react';

import { Container } from './styles';

function InputGroup({ children }) {
  return <Container>{children}</Container>;
}

export default React.memo(InputGroup);
