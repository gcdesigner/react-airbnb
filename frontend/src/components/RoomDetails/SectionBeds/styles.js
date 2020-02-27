import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ebebeb;
`;

export const Header = styled.strong`
  display: block;
  margin-bottom: 20px;
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
