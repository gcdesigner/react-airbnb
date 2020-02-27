import React, { useState } from 'react';
import { format } from 'date-fns';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import Calendar from './Calendar';

import { Container, Header, MyCalendar } from './styles';

export default function SectionAvailability() {
  const [date, setDate] = useState(new Date());

  function handleChangeDate(date) {
    setDate(date);
  }

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
        {/* <Calendar
          className="calendar-double"
          onChange={handleChangeDate}
          value={date}
          selectRange={true}
          formatMonthYear={(locale, date) => format(date, 'MMMM yyyy')}
          prevLabel={<IoIosArrowRoundBack size="20" />}
          nextLabel={<IoIosArrowRoundForward size="20" />}
        /> */}
        <Calendar />
      </MyCalendar>
    </Container>
  );
}
