import React from 'react';
import Slider from 'infinite-react-carousel';

import { Container } from './styles';

export default function MySlider({ children }) {
  const settings = {
    arrows: false,
    arrowsBlock: false,
    dots: true,
    initialSlide: true,
  };

  return (
    <Container className="carousel">
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
}
