import styled from 'styled-components';
import Content from '~/components/shared/Content';

export const Container = styled.div`
  font-size: 16px;

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 16px;
  }

  h2,
  h3 {
    margin-bottom: 20px;
  }
`;

export const Wrapper = styled(Content)`
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.div`
  width: 56%;

  @media (max-width: 1128px) {
    width: 100%;
  }
`;

export const Sidebar = styled.div`
  position: relative;
  width: 44%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1128px) {
    display: none;
  }
`;
