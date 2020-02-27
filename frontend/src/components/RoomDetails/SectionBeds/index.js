import React from 'react';
import SVGBedQueen from '~/assets/icons/bed-queen';

import { Container, Header, List, Item } from './styles';

export default function SectionBeds() {
  return (
    <Container>
      <Header>Tipos de cama</Header>
      <List>
        <Item>
          <SVGBedQueen />
          <div>
            <strong>Quarto 1</strong>
            <span>1 cama queen</span>
          </div>
        </Item>
      </List>
    </Container>
  );
}
