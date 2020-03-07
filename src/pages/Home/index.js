import React from 'react';

import SectionHeader from '~/components/Home/SectionHeader';
import Content from '~/components/shared/Content';
import SectionTopReated from '~/components/Home/SectionTopReated';
import SectionValuesProps from '~/components/Home/SectionValuesProps';
import SectionRecentReserved from '~/components/Home/SectionRecentReserved';
import SectionBannerAction from '~/components/Home/SectionBannerAction';
import Footer from '~/components/shared/Footer';

import { Container, Breadcrumb } from './styles';

export default function Home() {
  return (
    <Container>
      <SectionHeader />
      <Content>
        <Breadcrumb>
          <a href="/">United States</a>
          <small>Aluguéis por Temporada em Estados Unidos</small>
        </Breadcrumb>

        <SectionTopReated />
        <SectionValuesProps />
        <SectionRecentReserved />
        <SectionBannerAction />
      </Content>
      <Footer />
    </Container>
  );
}
