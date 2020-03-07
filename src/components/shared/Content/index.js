import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Content(props) {
  return (
    <Container {...props} className={`content ${props.className}`}>
      {props.children}
    </Container>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
