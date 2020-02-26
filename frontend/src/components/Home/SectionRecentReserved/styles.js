import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.section`
  padding: 0 0 50px;

  header {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -8px;

  @media (max-width: 744px) {
    flex-wrap: wrap;
  }
`;

export const Item = styled.div`
  width: 100%;
  margin: 0 8px;

  @media (max-width: 744px) {
    width: calc(50% - 16px);
    margin-bottom: 20px;
  }
`;

export const ImageRoom = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 3px;
`;

export const Description = styled.div`
  padding: 5px 0;

  span {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
  }

  strong {
    display: block;
    font-size: 18px;
    margin: 2px 0;
  }

  small {
    display: block;
    font-size: 14px;
  }
`;

export const Rate = styled.div`
  display: flex;

  small {
    margin-left: 5px;
  }
`;

export const ShowAll = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.secondary};
  font-weight: 600;
  font-size: 17px;
  margin: 20px 0 0;

  &:hover {
    text-decoration: underline;
  }

  small {
    margin-left: 5px;
  }
`;
