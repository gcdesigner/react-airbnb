import React from 'react';

import { Container, Wrapper, Main, Sidebar } from './styles';

import Header from '~/components/shared/Header';
import GalleryHeader from '~/components/shared/GalleryHeader';
import BookForm from '~/components/RoomDetails/Sidebar';
import SectionSummary from '~/components/RoomDetails/SectionSummary';
import SectionDetails from '~/components/RoomDetails/SectionDetails';
import SectionDescription from '~/components/RoomDetails/SectionDescription';

export default function RoomDetails() {
  return (
    <Container>
      <Header />
      <GalleryHeader />
      <Wrapper>
        <Main>
          <SectionSummary />
          <SectionDetails />
          <SectionDescription />
        </Main>
        <Sidebar>
          <BookForm />
        </Sidebar>
      </Wrapper>
    </Container>
  );
}
