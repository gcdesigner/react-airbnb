import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Content({ children }) {
  return <Container className="content">{children}</Container>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
