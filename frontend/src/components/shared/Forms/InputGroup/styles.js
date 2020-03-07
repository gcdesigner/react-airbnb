import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    &:first-child {
      > div,
      input,
      select {
        border-radius: 4px 0 0 4px;
      }
    }
    &:last-child {
      > div,
      input,
      select {
        border-radius: 0 4px 4px 0;
        border-left: 0;
      }
    }
  }
`;
