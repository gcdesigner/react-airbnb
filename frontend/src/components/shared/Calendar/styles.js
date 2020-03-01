import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -10px;
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const Header = styled.div`
  position: relative;
  margin-bottom: 20px;
  text-align: center;

  strong {
    display: block;
    font-size: 20px;
    text-transform: capitalize;
  }

  button {
    position: absolute;
    display: flex;
    align-items: center;
    border: 1px solid #ebebeb;
    padding: 10px 15px;
    top: 0;

    &.prevMonth {
      left: 0;
    }

    &.nextMonth {
      right: 0;
    }
  }
`;

export const WeekDays = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    width: 100%;
    text-align: center;
    font-size: 12px;
  }
`;

export const Days = styled.table`
  width: 100%;

  tr {
    display: flex;
    justify-content: space-between;

    td {
      width: 100%;
      margin: 2px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      button {
        width: 100%;
        text-align: center;
        padding: 5px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
      }
    }
  }
`;
