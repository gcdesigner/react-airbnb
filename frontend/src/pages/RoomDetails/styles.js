import styled from 'styled-components';
import Content from '~/components/shared/Content';

export const Container = styled.div``;

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
