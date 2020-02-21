import styled from 'styled-components';

export const Container = styled.section`
  padding: 0 0 40px;

  header {
    width: 100%;
    padding: 15px 0 20px;
    font-size: 18px;
  }
`;

export const List = styled.div`
  display: flex;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  padding: 32px 0;
`;

export const Item = styled.div`
  width: 100%;

  > div {
    padding-right: 35px;

    strong {
      display: block;
      font-size: 16px;
      margin: 15px 0 5px;
    }
  }
`;
