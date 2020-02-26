import React from 'react';
import PropTypes from 'prop-types';

import { AiFillStar } from 'react-icons/ai';
import colors from '~/styles/colors';

import { StarList } from './styles';

export default function RatedStars({ size }) {
  return (
    <StarList>
      <AiFillStar size={size} color={colors.secondary} />
      <AiFillStar size={size} color={colors.secondary} />
      <AiFillStar size={size} color={colors.secondary} />
      <AiFillStar size={size} color={colors.secondary} />
      <AiFillStar size={size} color={colors.secondary} />
    </StarList>
  );
}

RatedStars.propTypes = {
  size: PropTypes.string.isRequired,
};
