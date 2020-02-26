import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: #fff;
  padding: 0 20px;
  margin-bottom: 3px;
  z-index: 3;

  .logo-search {
    display: flex;
    align-items: center;
    height: 100%;
    min-width: 440px;

    .logo {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      width: 70px;
      z-index: 3;

      .seta {
        display: none;
        margin-left: 5px;
        transition: all .5s;
      }
    }
  }

  &.menuOpened {
    .seta {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 1128px) {
    height: 60px;

    .logo-search {
      flex: 1;
      max-width: 65%;

      .logo .seta {
        display: block;
      }
    }
  }

  @media (max-width: 744px) {
    .logo-search {
      flex: 1;
      min-width: 100%;
      max-width: 100%;
    }
  }
`;

export const FormSearch = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 0 0 5px 0px #ccc;
  border-radius: 3px;
  padding: 10px;
  margin-left: 20px;

  input {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: #484848;
    margin-left: 10px;
    border: 0;
  }
`;

export const Navbar = styled.nav`
  ul {
    display: flex;
    li {
      height: 80px;
      line-height: 80px;
      padding: 0 15px;

      a {
        display: flex;
        align-items: center;
        color: #484848;
        font-weight: 600;

        svg {
          margin-right: 5px;
        }

        &:hover {
          border-bottom: 2px solid #484848;
        }
      }
    }
  }

  @media (max-width: 1128px) {
    display: none;
  }
`;
