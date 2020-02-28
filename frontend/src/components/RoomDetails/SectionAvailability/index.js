import React, { useState } from 'react';
import { eachDayOfInterval, subMonths } from 'date-fns';
import { Datepicker, START_DATE } from '@datepicker-react/styled';
import { ThemeProvider } from 'styled-components';
import colors from '~/styles/colors';
import { darken } from 'polished';

import { Container, Header, MyCalendar } from './styles';

export default function SectionAvailability() {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    unDates: eachDayOfInterval({
      start: subMonths(new Date(), 12),
      end: new Date(),
    }),
    focusedInput: START_DATE,
  });

  function handleDatesChange(data) {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE });
    } else {
      setState(data);
    }
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
        <ThemeProvider
          theme={{
            breakpoints: ['32em', '48em', '64em'],
            reactDatepicker: {
              showResetDates: false,
              daySize: [36, 40],
              fontFamily: 'system-ui, -apple-system',
              monthLabelFontSize: '20px',
              colors: {
                accessibility: 'transparent',
                selectedDay: colors.secondary,
                selectedDayHover: 'transparent',
                primaryColor: colors.secondary,
              },
              dayBackground: '#edf6f6',
              dayHoverBackground: darken(0.2, '#edf6f6'),
              dayBorderColor: '#fff',
              daySelectedBorderColor: '#fff',
              daySelectedFirstOrLastBorderColor: '#fff',
              dayAccessibilityBorderColor: 'transparent',
              datepickerBoxShadow: 'none',
              datepickerPadding: '0',
              datepickerCloseWrapperDisplay: 'none',
              datepickerMonthsGridGap: '4',
            },
          }}>
          <Datepicker
            onDatesChange={handleDatesChange}
            startDate={state.startDate} // Date or null
            endDate={state.endDate} // Date or null
            focusedInput={state.focusedInput} // START_DATE, END_DATE or null
            showSelectedDates={false}
            showClose={false}
            showResetDates={false}
            unavailableDates={state.unDates}
            firstDayOfWeek={0}
          />
        </ThemeProvider>
      </MyCalendar>
    </Container>
  );
}
