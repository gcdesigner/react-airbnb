import React from 'react';
import BGImage from '~/components/shared/BGImage';
import SVGMedal from '~/assets/icons/medal';

import avatar from '~/assets/avatars/avatar4.jpg';

import { Container, Title, Author, Avatar } from './styles';

function SectionSummary() {
  return (
    <Container id="summary">
      <Title>
        <h1>The Joshua Tree House</h1>
        <span>Joshua Tree</span>
      </Title>
      <Author>
        <Avatar>
          <BGImage src={avatar} size={['64px', '64px']} circle />
          <SVGMedal size="35" />
        </Avatar>
        <span>Sara & Rich</span>
      </Author>
    </Container>
  );
}

export default React.memo(SectionSummary);
