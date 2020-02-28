import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  strong {
    font-size: 20px;
    text-transform: capitalize;
  }

  button {
    display: flex;
    align-items: center;
    border: 1px solid #ebebeb;
    padding: 10px 15px;
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
      text-align: center;
      padding: 5px;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      margin: 2px;
    }
  }
`;
