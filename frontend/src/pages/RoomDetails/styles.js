import styled from 'styled-components';
import Content from '~/components/shared/Content';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto;
`;

export const Main = styled.div`
  width: 56%;
`;

export const Sidebar = styled.div`
  position: relative;
  width: 44%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
`;
