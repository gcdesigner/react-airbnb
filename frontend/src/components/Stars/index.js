import React from 'react';

import { AiFillStar } from 'react-icons/ai';
import colors from '~/styles/colors';

import { StarList } from './styles';

export default function Stars({ size }) {
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
