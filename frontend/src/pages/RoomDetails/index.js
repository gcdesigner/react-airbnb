import React from 'react';

import { Container, Wrapper, Main, Sidebar } from './styles';

import Breadcrumb from '~/components/RoomDetails/Breadcrumb';
import Header from '~/components/shared/Header';
import GalleryHeader from '~/components/shared/GalleryHeader';
import BookForm from '~/components/RoomDetails/Sidebar';
import SectionSummary from '~/components/RoomDetails/SectionSummary';
import SectionDetails from '~/components/RoomDetails/SectionDetails';
import SectionDescription from '~/components/RoomDetails/SectionDescription';
import SectionConfort from '~/components/RoomDetails/SectionConfort';
import SectionBeds from '~/components/RoomDetails/SectionBeds';
import SectionAvailability from '~/components/RoomDetails/SectionAvailability';
import SectionComments from '~/components/RoomDetails/SectionComments';
import SectionHostProfile from '~/components/RoomDetails/SectionHostProfile';

export default function RoomDetails() {
  return (
    <Container>
      <Breadcrumb />
      <Header />
      <GalleryHeader />
      <Wrapper>
        <Main>
          <SectionSummary />
          <SectionDetails />
          <SectionDescription />
          <SectionConfort />
          <SectionBeds />
          <SectionAvailability />
          <SectionComments />
          <SectionHostProfile />
        </Main>
        <Sidebar>
          <BookForm />
        </Sidebar>
      </Wrapper>
    </Container>
  );
}
