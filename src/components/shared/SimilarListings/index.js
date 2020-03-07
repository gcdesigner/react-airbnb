import React from 'react';
import Content from '~/components/shared/Content';
import RecommendedRooms from './RecommendedRooms';
import ThingsToDo from './ThingsToDo';

import { Container } from './styles';

export default function SimilarListings() {
  return (
    <Container id="similarListings">
      <Content>
        <RecommendedRooms />
        <ThingsToDo />
      </Content>
    </Container>
  );
}
