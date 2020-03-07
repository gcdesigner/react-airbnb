import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Image } from './styles';

function BGImage(props) {
  const { link, image, size, bgSize, circle } = props;
  return (
    <Container size={size} circle={circle}>
      {link ? (
        <Link to={link}>
          <Image style={{ backgroundImage: `url(${image})` }} bgSize={bgSize} />
        </Link>
      ) : (
        <Image style={{ backgroundImage: `url(${image})` }} bgSize={bgSize} />
      )}
    </Container>
  );
}

export default React.memo(BGImage);

BGImage.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string.isRequired,
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
