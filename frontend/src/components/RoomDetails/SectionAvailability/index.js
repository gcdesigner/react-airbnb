import React from 'react';

import Calendar from '~/components/shared/Calendar';

import { Container, Header, MyCalendar } from './styles';

function SectionAvailability() {
  return (
    <Container>
      <Header>
        <strong>Disponibilidade</strong>
        <p>
          Insira as datas da sua viagem para conhecer os preços e
          disponibilidade exatos
        </p>
      </Header>

      <MyCalendar>
        <Calendar />
      </MyCalendar>
    </Container>
  );
}

export default React.memo(SectionAvailability);
