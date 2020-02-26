import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 62px;
  left: 0;
  width: 100%;
  height: 0;
  background: #fff;
  overflow: auto;
  z-index: 2;
  transition: height .5s;

  &.opened {
    height: calc(100vh - 60px);
  }

  ul {
    width: 100%;
    padding: 30px 25px 40px;
    overflow: auto;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &.divider {
        border-bottom: 1px solid #ebebeb;
        margin: 20px 0;
      }

      a {
        display: block;
        padding: 10px 0;
        color: #484848;
        font-size: 16px;

        &:hover {
          text-decoration: underline;
        }

        span {
          display: block;
        }

        small {
          display: block;
          font-size: 14px;
        }
      }
    }
  }
`;

