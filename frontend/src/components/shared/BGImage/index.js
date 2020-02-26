import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Image } from './styles';

export default function BGImage(props) {
  const { link, src, size, bgSize, circle } = props;
  return (
    <Container {...props} size={size}>
      {link ? (
        <Link to={link}>
          <Image src={src} bgSize={bgSize} circle={circle} />
        </Link>
      ) : (
        <Image src={src} bgSize={bgSize} circle={circle} />
      )}
    </Container>
  );
}

BGImage.propTypes = {
  link: PropTypes.string,
  src: PropTypes.string.isRequired,
  size: PropTypes.array,
  bgSize: PropTypes.string,
  circle: PropTypes.bool,
};

BGImage.defaultProps = {
  link: null,
  size: ['100%', '100%'],
  bgSize: 'cover',
  circle: false,
};
