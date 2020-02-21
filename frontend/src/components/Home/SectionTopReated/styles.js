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
  display: flex;
  justify-content: space-between;
  margin: 0 -8px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 8px;
`;

export const RoomImage = styled.div`
  width: 100%;
  height: 222px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  max-height: 56px;
  text-overflow: ellipsis;
  line-height: 1.3;
  margin: 15px 0;
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
