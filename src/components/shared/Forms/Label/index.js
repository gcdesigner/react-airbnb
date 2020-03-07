import React from 'react';

import { Container } from './styles';

function Label(props) {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
}

export default React.memo(Label);
