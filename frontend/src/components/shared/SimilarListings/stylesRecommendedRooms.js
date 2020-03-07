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

    &:disabled {
      display: none;
    }

    &.prev {
      left: -40px;
    }

    &.next {
      right: -40px;
    }

    @media (max-width: 744px) {
      display: none;
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

  @media (max-width: 744px) {
    margin: 0 -24px;

    > div {
      overflow-x: auto;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const Item = styled.div`
  min-width: 100%;
  padding: 0 8px;

  @media (max-width: 744px) {
    padding: 0 24px;
  }

  @media (min-width: 744px) {
    min-width: 50%;
  }

  @media (min-width: 1128px) {
    min-width: 33.3%;
  }

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
      white-space: pre;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 2px 0;
    }

    .price {
      display: block;
    }
  }
`;
