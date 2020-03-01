import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  > strong {
    display: block;
    font-size: 24px;
    margin-bottom: 20px;
  }

  div {
    display: flex;

    .qtd-comments {
      > div {
        font-size: 16px;
        margin-right: 16px;
        strong {
          margin-right: 10px;
        }
      }
    }
  }
`;

export const FormControl = styled.div``;

export const Statistics = styled.div``;
