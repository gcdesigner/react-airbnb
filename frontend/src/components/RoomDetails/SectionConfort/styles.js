import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  font-size: 16px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 30px;
`;

export const Header = styled.strong`
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;

  svg {
    margin-right: 10px;
    font-size: 20px;
  }
`;

export const ShowAll = styled.div`
  button {
    color: ${colors.secondary};
    font-weight: 600;
    font-size: 16px;
    margin: 16px 0 0;
  }
`;
