import React from 'react';

import { Container, List, Item, Description, Rate, ShowAll } from './styles';

import BGImage from '~/components/shared/BGImage';
import RatedStars from '~/components/shared/RatedStars';

import room3 from '~/assets/rooms/room3.jpg';
import room4 from '~/assets/rooms/room4.jpg';
import room5 from '~/assets/rooms/room5.jpg';
import room6 from '~/assets/rooms/room6.jpg';

import { FiChevronRight } from 'react-icons/fi';

export default function SectionRecentReserved() {
  return (
    <Container>
      <header>
        <h2>Reservada recentemente em Estados Unidos</h2>
      </header>

      <List>
        <Item>
          <BGImage link="/" src={room3} size="164px" />
          <Description>
            <span>Estados Unidos</span>
            <strong>The Joshua Tree House</strong>
            <small>R$ 1,269/noite</small>
          </Description>
          <Rate>
            <RatedStars size="12" />
            <small>499 . Superhost</small>
          </Rate>
        </Item>

        <Item>
          <BGImage link="/" src={room4} size="164px" />
          <Description>
            <span>Estados Unidos</span>
            <strong>The Mushroom Dome Retreat & Land of Paradise</strong>
            <small>R$571/noite</small>
          </Description>
          <Rate>
            <RatedStars size="12" />
            <small>1436 . Superhost</small>
          </Rate>
        </Item>

        <Item>
          <BGImage link="/" src={room5} size="164px" />
          <Description>
            <span>Estados Unidos</span>
            <strong>Underground Hyge</strong>
            <small>R$1,318/noite</small>
          </Description>
          <Rate>
            <RatedStars size="12" />
            <small>595</small>
          </Rate>
        </Item>

        <Item>
          <BGImage link="/" src={room6} size="164px" />
          <Description>
            <span>Estados Unidos</span>
            <strong>Off-grid itHouse</strong>
            <small>R$1,976/noite</small>
          </Description>
          <Rate>
            <RatedStars size="12" />
            <small>264</small>
          </Rate>
        </Item>
      </List>

      <ShowAll>
        Mostrar tudo (20.000+)
        <FiChevronRight size="20" />
      </ShowAll>
    </Container>
  );
}
