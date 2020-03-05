import React from 'react';

import { Container, List, Item } from './styles';

import SVGPresentation from '~/assets/icons/presentation';
import SVGHouse from '~/assets/icons/house';
import SVGStar from '~/assets/icons/star';

export default function SectionValuesProps() {
  return (
    <Container>
      <header>
        <h2>Viajando com o Airbnb</h2>
      </header>
      <List>
        <Item>
          <SVGPresentation size={40} />
          <div>
            <strong>Atendimento ao cliente 24h</strong>
            <p>
              Dia ou noite, estamos aqui por você. Fale com nossa equipe de
              atendimento em qualquer lugar do mundo, a qualquer hora do dia.
            </p>
          </div>
        </Item>

        <Item>
          <SVGHouse size={40} />
          <div>
            <strong>Padrões de hospitalidade globais</strong>
            <p>
              Os hóspedes deixam comentários para os anfitriões depois de cada
              estadia. Todos os anfitriões precisam atender aos nossos padrões
              de hospitalidade e manter uma nota de avaliação mínima para
              permanecer no Airbnb.
            </p>
          </div>
        </Item>

        <Item>
          <SVGStar size={40} color="#60B6B5" />
          <div>
            <strong>Atendimento ao cliente 24h</strong>
            <p>
              Dia ou noite, estamos aqui por você. Fale com nossa equipe de
              atendimento em qualquer lugar do mundo, a qualquer hora do dia.
            </p>
          </div>
        </Item>
      </List>
    </Container>
  );
}
