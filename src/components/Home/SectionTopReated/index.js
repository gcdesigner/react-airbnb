import React from 'react';

import { Container, List, Item, Description, Author, Avatar } from './styles';

import BGImage from '~/components/shared/BGImage';
import SVGStar from '~/assets/icons/star';
import RatedStars from '~/components/shared/RatedStars';

import avatar1 from '~/assets/avatars/avatar1.jpg';
import avatar2 from '~/assets/avatars/avatar2.jpg';
import avatar3 from '~/assets/avatars/avatar3.jpg';

import room1 from '~/assets/rooms/room1.webp';
import room2 from '~/assets/rooms/room2.jpg';
import room3 from '~/assets/rooms/room3.jpg';

export default function SectionTopReated() {
  return (
    <Container>
      <header>
        <h2>
          O que os hóspedes estão falando sobre lugares para fica em Estados
          Unidos
        </h2>
        <p>
          <SVGStar />
          Acomodações em Estados Unidos foram avaliadas com
          <strong> 4.8 de 5 estrelas</strong> em mais de
          <strong> 43.500.000 avaliações</strong>
        </p>
      </header>

      <List>
        <Item>
          <BGImage link="/rooms/1" image={room1} size={['222px']} />
          <RatedStars size="20" />
          <Description>
            Os anfitriões, nos deixaram muito à vontade desde a recepção até a
            saída. Lugar agradável, limpo, com ótima infraestrutra e
            excelente...
          </Description>
          <Author>
            <Avatar image={avatar1} />
            <div>
              <strong>Rodrigo</strong>
              <span>Brasil</span>
            </div>
          </Author>
        </Item>

        <Item>
          <BGImage link="/" image={room2} size={['222px']} />
          <RatedStars size="20" />
          <Description>
            Os anfitriões, nos deixaram muito à vontade desde a recepção até a
            saída. Lugar agradável, limpo, com ótima infraestrutra e
            excelente...
          </Description>
          <Author>
            <Avatar image={avatar2} />
            <div>
              <strong>Rodrigo</strong>
              <span>Brasil</span>
            </div>
          </Author>
        </Item>

        <Item>
          <BGImage link="/" image={room3} size={['222px']} />
          <RatedStars size="20" />
          <Description>
            Os anfitriões, nos deixaram muito à vontade desde a recepção até a
            saída. Lugar agradável, limpo, com ótima infraestrutra e
            excelente...
          </Description>
          <Author>
            <Avatar image={avatar3} />
            <div>
              <strong>Rodrigo</strong>
              <span>Brasil</span>
            </div>
          </Author>
        </Item>
      </List>
    </Container>
  );
}
