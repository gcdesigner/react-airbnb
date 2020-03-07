import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => (props.size[1] ? props.size[1] : '100%')};
  height: ${props => (props.size[0] ? props.size[0] : '100%')};
  overflow: hidden;
  border-radius: ${props => (props.circle ? '50%' : '3px')};
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  /* background-image: url(${props => props.image}); */
  background-size: ${props => props.bgSize};
  background-position: center;
  background-repeat: no-repeat;
  transition: ease-in-out all 0.5s;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
