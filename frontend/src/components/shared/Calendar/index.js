import React, { useState, useEffect } from 'react';
import {
  eachWeekOfInterval,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  addMonths,
} from 'date-fns';
import { pt } from 'date-fns/locale';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { Container, Wrapper, Header, WeekDays, Days } from './styles';

export default function Calendar({ multiple }) {
  const [date, setDate] = useState(() => {
    if (multiple) {
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

  const month1 = format(date.date1, 'MMMM yyyy', { locale: pt });
  // const month2 = multiple && format(date.date2, 'MMMM yyyy', { locale: pt });

  const weekdays = [...Array(7).keys()].map(i =>
    pt.localize.day(i, { width: 'abbreviated' })
  );

  const [daysMonth, setDaysMonth] = useState([]);

  function nextMonth() {
    if (multiple) {
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
    if (multiple) {
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

  // const matrix2 =
  //   multiple &&
  //   eachWeekOfInterval({
  //     start: startOfMonth(date.date2),
  //     end: endOfMonth(date.date2),
  //   });

  function mountDays() {
    const matrix = eachWeekOfInterval({
      start: startOfMonth(date.date1),
      end: endOfMonth(date.date1),
    });

    const days = matrix.map(weekDay =>
      eachDayOfInterval({
        start: startOfWeek(weekDay),
        end: endOfWeek(weekDay),
      }).map((day, index) => ({
        id: format(day, 'dd MMMM yyyy'),
        day,
        active: false,
      }))
    );

    setDaysMonth(days);
  }

  useEffect(() => {
    mountDays();
  }, [date]);

  // const arrDays2 = matrix2.map(weekDay =>
  //   eachDayOfInterval({
  //     start: startOfWeek(weekDay),
  //     end: endOfWeek(weekDay),
  //   }).map(day =>
  //     toDate(day, {
  //       isSameMonth: isSameMonth(date.date2, day),
  //     })
  //   )
  // );

  function handleSelectDay(e) {
    console.log(e);
    // const arrDays = daysMonth.map(i => i.map(d => d));
    // const findDay = arrDays.map(i => i.filter(d => d.id == dateFormated));
    // const newArray = daysMonth.splice(findDay, 1);
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <button type="button" className="prevMonth" onClick={prevMonth}>
            <FiArrowLeft />
          </button>

          <strong>{month1}</strong>

          {!multiple && (
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
            {daysMonth.map((i, index) => (
              <tr key={index}>
                {i.map(d => (
                  <td key={d.day}>
                    <button
                      type="button"
                      onClick={e => handleSelectDay(d.day)}
                      aria-label={d.day}>
                      {format(d.day, 'dd')}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Days>
      </Wrapper>

      {/* {multiple && (
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
      )} */}
    </Container>
  );
}
