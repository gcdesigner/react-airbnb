import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px 0 40px;

  header {
    margin-bottom: 25px;

    h2 {
      font-size: 26px;
    }

    svg {
      position: relative;
      top: 5px;
      margin-right: 10px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const List = styled.div`
  overflow-x: auto;
  margin-left: -32px;
  margin-right: -24px;
  padding-left: 24px;
  padding-right: 16px;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  display: inline-block;
  width: 31.8%;
  min-width: 300px;
  margin: 0 8px;
  overflow: hidden;

  svg {
    margin-top: 15px;
  }
`;

export const Description = styled.p`
  max-height: 56px;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.3;
  margin: 15px 0;
  overflow: hidden;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;

  strong {
    display: block;
    font-size: 16px;
  }
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  margin-right: 16px;
`;
