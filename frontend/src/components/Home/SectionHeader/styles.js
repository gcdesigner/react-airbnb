import styled from 'styled-components';
import banner from '~/assets/banner-home.jpeg';

export const Header = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  padding-bottom: 64px;

  @media (max-width: 744px) {
    padding-bottom: 0;
  }
`;

export const MenuArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;
  padding: 0 20px;
  background: transparent;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    z-index: -1;

    width: 100%;
    height: 100%;
    background: rgb(13, 13, 13);
    background: linear-gradient(
      180deg,
      rgba(13, 13, 13, 1) 0%,
      rgba(0, 212, 255, 0) 100%
    );
  }

  @media (max-width: 744px) {
    height: 60px;
    background: #fff;

    &::before {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  flex: 1;

  @media (max-width: 744px) {
    svg {
      fill: red !important;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;

  li {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 15px;

    a {
      color: #fff;
      line-height: 64px;
      font-weight: 600;
      height: 100%;

      &:hover {
        border-bottom: 2px solid #fff;
      }
    }
  }

  @media (max-width: 1128px) {
    display: none;
  }
`;
