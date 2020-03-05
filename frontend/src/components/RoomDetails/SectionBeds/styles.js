import styled from 'styled-components';

export const Container = styled.section`
  font-size: 16px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ebebeb;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  width: 33.33%;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 4px;

  strong {
    display: block;
    margin-top: 24px;
  }
`;
