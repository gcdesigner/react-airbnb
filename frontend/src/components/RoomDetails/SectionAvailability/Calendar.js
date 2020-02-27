import React from 'react';
import {
  eachWeekOfInterval,
  weekStartsOn,
  getWeeksInMonth,
  getDaysInMonth,
  getWeek,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  startOfISOWeek,
  endOfISOWeek,
  toDate,
  getDay,
  format,
} from 'date-fns';
import { pt } from 'date-fns/locale';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { Container, Wrapper, Header, WeekDays, Days } from './stylesCalendar';

export default function Calendar() {
  const date = new Date();

  const weekdays = [...Array(7).keys()].map(i =>
    pt.localize.day(i, { width: 'abbreviated' })
  );

  const weeksInMonth = getWeeksInMonth(new Date());
  const week = getWeek(new Date());
  const daysInMonth = getDaysInMonth(new Date());
  const eachDay = eachDayOfInterval({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date()),
  });

  const matrix = eachWeekOfInterval(
    {
      start: startOfMonth(date),
      end: endOfMonth(date),
    },
    {
      weekStartsOn: 1,
    }
  );

  const arr = matrix.map(weekDay =>
    eachDayOfInterval({
      start: startOfISOWeek(weekDay),
      end: endOfISOWeek(weekDay),
    }).map(day =>
      toDate(
        day,
        {
          isSameMonth: isSameMonth(date, day),
        },
        console.log(format(day, 'dd'))
      )
    )
  );

  console.log(arr);

  return (
    <Container>
      <Wrapper>
        <Header>
          <button type="button">
            <FiArrowLeft />
          </button>
          <strong>Agosto 2020</strong>
          <button type="button">
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
    </Container>
  );
}
