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
import SectionNeighborhood from '~/components/RoomDetails/SectionNeighborhood';
import SectionThingsToRemember from '~/components/RoomDetails/SectionThingsToRemember';

import SimilarListings from '~/components/shared/SimilarListings';
import Footer from '~/components/shared/Footer';

export default function RoomDetails() {
  return (
    <Container>
      <Breadcrumb />
      <Header />
      <GalleryHeader />
      <Wrapper>
        <Main id="main">
          <SectionSummary />
          <SectionDetails />
          <SectionDescription />
          <SectionConfort />
          <SectionBeds />
          <SectionAvailability />
          <SectionComments />
          <SectionHostProfile />
          <SectionNeighborhood />
          <SectionThingsToRemember />
        </Main>
        <Sidebar id="sidebar">
          <BookForm />
        </Sidebar>
      </Wrapper>

      <SimilarListings />

      <Footer />
    </Container>
  );
}
