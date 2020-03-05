import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 60px;
`;

export const Wrapper = styled.div`
  position: relative;

  button {
    position: absolute;
    font-size: 40px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 33;

    &.prev {
      left: -40px;
    }

    &.next {
      right: -40px;
    }
  }
`;

export const List = styled.div`
  position: relative;
  margin: 0 -8px;
  overflow: hidden;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s;
  }
`;

export const Item = styled.div`
  min-width: calc(33.3%);
  padding: 0 8px;

  .meta {
    margin-top: 16px;

    .type-rate {
      display: flex;
      align-items: center;
      justify-content: space-between;

      small {
        font-size: 14px;
      }

      .type {
        opacity: 0.9;
      }

      .rate {
        svg {
          margin-right: 5px;
        }

        small:last-child {
          opacity: 0.8;
        }
      }
    }

    .title {
      display: block;
      padding: 2px 0;
    }

    .price {
      display: block;
    }
  }
`;
