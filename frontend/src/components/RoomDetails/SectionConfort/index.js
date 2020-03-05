import React from 'react';
import { FaToiletPaper } from 'react-icons/fa';
import { FiThermometer } from 'react-icons/fi';
import { GiFireplace, GiHotSurface } from 'react-icons/gi';

import { Container, List, Item, ShowAll } from './styles';

export default function SectionConfort() {
  return (
    <Container>
      <h3>Comodidades</h3>
      <List>
        <Item>
          <FaToiletPaper />
          <span>Básico</span>
        </Item>
        <Item>
          <FiThermometer />
          <span>Aquecimento Central</span>
        </Item>
        <Item>
          <GiFireplace />
          <span>Lareira interna</span>
        </Item>
        <Item>
          <GiHotSurface />
          <span>Água quente</span>
        </Item>
      </List>
      <ShowAll>
        <button type="button" onClick={() => {}}>
          Mostrar todas as 13 comodidades
        </button>
      </ShowAll>
    </Container>
  );
}
