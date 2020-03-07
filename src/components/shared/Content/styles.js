import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 744px) {
    max-width: 696px;
  }

  @media (min-width: 1128px) {
    max-width: 1080px;
  }
`;
