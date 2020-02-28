import React, { useState } from 'react';
import {
  eachWeekOfInterval,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  startOfWeek,
  endOfWeek,
  toDate,
  format,
  addMonths,
  getMonth,
} from 'date-fns';
import { pt } from 'date-fns/locale';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { Container, Wrapper, Header, WeekDays, Days } from './stylesCalendar';

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(addMonths(date, 1));
  const month = format(date, 'MMMM yyyy', { locale: pt });
  const month2 = format(date2, 'MMMM yyyy', { locale: pt });

  function nextMonth() {
    setDate(addMonths(date, 1));
  }

  function prevMonth() {
    setDate(addMonths(date, -1));
    setDate2(addMonths(date2, -1));
  }

  function nextMonth2() {
    setDate(addMonths(date, 1));
    setDate2(addMonths(date2, 1));
  }

  function prevMonth2() {
    setDate2(addMonths(date2, -1));
  }

  const weekdays = [...Array(7).keys()].map(i =>
    pt.localize.day(i, { width: 'abbreviated' })
  );

  const matrix = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });

  const arr = matrix.map(weekDay =>
    eachDayOfInterval({
      start: startOfWeek(weekDay),
      end: endOfWeek(weekDay),
    }).map(day =>
      toDate(day, {
        isSameMonth: isSameMonth(date, day),
      })
    )
  );

  const matrix2 = eachWeekOfInterval({
    start: startOfMonth(date2),
    end: endOfMonth(date2),
  });

  const arr2 = matrix2.map(weekDay =>
    eachDayOfInterval({
      start: startOfWeek(weekDay),
      end: endOfWeek(weekDay),
    }).map(day =>
      toDate(day, {
        isSameMonth: isSameMonth(date2, day),
      })
    )
  );

  return (
    <Container>
      <Wrapper>
        <Header>
          <button type="button" onClick={prevMonth}>
            <FiArrowLeft />
          </button>
          <strong>{month}</strong>
          <button type="button" onClick={nextMonth}>
            <FiArrowRight />
          </button>
        </Header>
        <WeekDays>
          {weekdays.map(i => (
            <li key={i}>{i}</li>
          ))}
        </WeekDays>
        <Days>
          <tbody>
            {arr.map(i => (
              <tr>
                {i.map(d => (
                  <td>{format(d, 'dd')}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Days>
      </Wrapper>

      <Wrapper>
        <Header>
          <button type="button" onClick={prevMonth2}>
            <FiArrowLeft />
          </button>
          <strong>{month2}</strong>
          <button type="button" onClick={nextMonth2}>
            <FiArrowRight />
          </button>
        </Header>
        <WeekDays>
          {weekdays.map(i => (
            <li key={i}>{i}</li>
          ))}
        </WeekDays>
        <Days>
          <tbody>
            {arr2.map(i => (
              <tr>
                {i.map(d => (
                  <td>{format(d, 'dd')}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Days>
      </Wrapper>
    </Container>
  );
}
