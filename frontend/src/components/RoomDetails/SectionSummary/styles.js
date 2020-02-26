import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.div`
  h1 {
    font-size: 32px;
  }
  span {
    font-size: 16px;
  }
`;

export const Author = styled.div`
  span {
    color: #767676;
    font-size: 14px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin-bottom: 8px;

  svg {
    position: absolute;
    bottom: -5px;
    right: -5px;
  }
`;
