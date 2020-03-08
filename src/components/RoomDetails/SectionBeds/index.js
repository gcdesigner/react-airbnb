import React from 'react';
import SVGBedQueen from '~/assets/icons/bed-queen';

import { Container, List, Item } from './styles';

export default function SectionBeds() {
  return (
    <Container>
      <h3>Tipos de cama</h3>
      <List>
        <Item>
          <SVGBedQueen />
          <div>
            <strong>Quarto 1</strong>
            <span>1 cama queen</span>
          </div>
        </Item>
        <Item>
          <SVGBedQueen />
          <div>
            <strong>Quarto 2</strong>
            <span>1 cama queen</span>
          </div>
        </Item>
      </List>
    </Container>
  );
}
