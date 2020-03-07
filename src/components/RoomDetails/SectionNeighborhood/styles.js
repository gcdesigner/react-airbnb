import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.section`
  font-size: 16px;
  margin-bottom: 40px;

  a,
  button {
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: ${colors.secondary};
  }
`;

export const Text = styled.div`
  margin-bottom: 20px;

  p {
    margin-bottom: 16px;
  }
`;

export const Map = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;

  a {
    margin-bottom: 20px;
  }

  iframe {
    width: 100%;
    height: 350px;
    border: 0;
  }
`;
