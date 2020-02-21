import React from 'react';

import { Container, List, Item } from './styles';

export default function SectionHomes() {
  return (
    <Container>
      <header>
        <h2>Reservada recentemente em Estados Unidos</h2>
      </header>
      <List>
        <Item>
          <ImageRoom src=""/>
            <Details>
              <Country />
            </Details>
        </Item>
      </List>
    </Container>
  )
}