import styled from 'styled-components';

export const Container = styled.section`
  font-size: 16px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ebebeb;
`;

export const Header = styled.div``;

export const MyCalendar = styled.div`
  padding: 20px 0 0;

  > div > div > div:nth-child(2) {
    > div {
      top: 0;
    }
  }
`;
