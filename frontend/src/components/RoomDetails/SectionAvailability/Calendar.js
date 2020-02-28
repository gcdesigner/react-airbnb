import React, { useState, useEffect } from 'react';
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

export default function Calendar({ qtdMonths = false }) {
  const [date, setDate] = useState(() => {
    if (qtdMonths) {
      const dates = {
        date1: new Date(),
        date2: addMonths(new Date(), 1),
      };
      return dates;
    } else {
      const dates = {
        date1: new Date(),
      };
      return dates;
    }
  });

  const [datesSelected, setDatesSelected] = useState([]);

  const month1 = format(date.date1, 'MMMM yyyy', { locale: pt });
  const month2 = format(date.date2, 'MMMM yyyy', { locale: pt });

  const weekdays = [...Array(7).keys()].map(i =>
    pt.localize.day(i, { width: 'abbreviated' })
  );

  function nextMonth() {
    if (qtdMonths) {
      setDate({
        date1: addMonths(date.date1, 1),
        date2: addMonths(date.date2, 1),
      });
    } else {
      setDate({
        date1: addMonths(date.date1, 1),
      });
    }
  }

  function prevMonth() {
    if (qtdMonths) {
      setDate({
        date1: addMonths(date.date1, -1),
        date2: addMonths(date.date2, -1),
      });
    } else {
      setDate({
        date1: addMonths(date.date1, -1),
      });
    }
  }

  const matrix = eachWeekOfInterval({
    start: startOfMonth(date.date1),
    end: endOfMonth(date.date1),
  });

  const matrix2 = eachWeekOfInterval({
    start: startOfMonth(date.date2),
    end: endOfMonth(date.date2),
  });

  const arrDays = matrix.map(weekDay =>
    eachDayOfInterval({
      start: startOfWeek(weekDay),
      end: endOfWeek(weekDay),
    }).map(day =>
      toDate(day, {
        isSameMonth: isSameMonth(date.date1, day),
      })
    )
  );

  const arrDays2 = matrix2.map(weekDay =>
    eachDayOfInterval({
      start: startOfWeek(weekDay),
      end: endOfWeek(weekDay),
    }).map(day =>
      toDate(day, {
        isSameMonth: isSameMonth(date.date2, day),
      })
    )
  );

  function handleClickDay(e) {
    // setDatesSelected([...datesSelected, format(e, 'dd MM yy')]);
    const map = datesSelected.map(i => i);
    const index = map.indexOf(format(e, 'dd MM yy'));

    if (index !== -1) {
      console.log('nao encontrou');
      setDatesSelected([...datesSelected, format(e, 'dd MM yy')]);
    } else {
      console.log('encontrou');
    }

    console.log(datesSelected);
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <button type="button" className="prevMonth" onClick={prevMonth}>
            <FiArrowLeft />
          </button>

          <strong>{month1}</strong>

          {!qtdMonths && (
            <button type="button" className="nextMonth" onClick={nextMonth}>
              <FiArrowRight />
            </button>
          )}
        </Header>
        <WeekDays>
          {weekdays.map(i => (
            <li key={i}>{i}</li>
          ))}
        </WeekDays>
        <Days>
          <tbody>
            {arrDays.map(i => (
              <tr key={i}>
                {i.map(d => (
                  <td key={d}>
                    <button
                      type="button"
                      onClick={e => handleClickDay(d)}
                      aria-label={d}>
                      {format(d, 'dd')}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Days>
      </Wrapper>

      {qtdMonths && (
        <Wrapper>
          <Header>
            <strong>{month2}</strong>
            <button type="button" className="nextMonth" onClick={nextMonth}>
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
              {arrDays2.map(i => (
                <tr key={i}>
                  {i.map(d => (
                    <td key={d}>
                      <button type="button" onClick={() => {}} aria-label={d}>
                        {format(d, 'dd')}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Days>
        </Wrapper>
      )}
    </Container>
  );
}
