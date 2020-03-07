import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > div {
    width: 100%;
  }

  .carousel-dots {
    position: absolute;
    bottom: 10px;
    z-index: 3;

    li {
      width: 10px;
      height: 15px;

      button::before {
        font-size: 22px;
        color: #fff;
        opacity: 0.5;
      }

      &.carousel-dots-active {
        button::before {
          top: -1px;
          font-size: 30px;
          color: #fff;
          opacity: 1;
        }
      }
    }

    button {
      &::before {
        font-size: 30px;
        color: #fff;
      }
    }
  }
`;
