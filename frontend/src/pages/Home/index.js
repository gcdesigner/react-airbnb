import React from 'react';

import HomeHeader from '~/components/HomeHeader';
import Content from '~/components/Content';
import SectionTopReated from '~/components/Home/SectionTopReated';
import SectionValuesProps from '~/components/Home/SectionValuesProps';

import { Container, Breadcrumb } from './styles';

export default function Home() {
  return (
    <Container>
      <HomeHeader />
      <Content>
        <Breadcrumb>
          <a href="#">United States</a>
          <small>Aluguéis por Temporada em Estados Unidos</small>
        </Breadcrumb>

        <SectionTopReated />
        <SectionValuesProps />
      </Content>
    </Container>
  );
}
