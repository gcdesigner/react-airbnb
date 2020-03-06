import styled, { keyframes } from 'styled-components';
import colors from '~/styles/colors';

const animation = keyframes`
  from {
    top: -50px;
  }

  to {
    top: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  background: #fff;
  z-index: 5;
  animation: ease ${animation} 0.2s;
  top: 0;
  transition: all 0.5s;

  > div {
    display: flex;
    align-items: center;
    width: 1080px;

    @media (max-width: 744px) {
      overflow-x: auto;
    }
  }
`;

export const Nav = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 744px) {
    margin-left: -24px;
    margin-right: -24px;
    white-space: pre;
    overflow-x: auto;
  }

  li {
    position: relative;
    height: 50px;
    line-height: 50px;
    margin-right: 16px;

    @media (max-width: 744px) {
      &:first-child {
        padding-left: 24px;
      }
      &:last-child {
        padding-right: 24px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: calc(50% - 1px);
      right: -8px;
      width: 2px;
      height: 2px;
      background: #999;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }

    button {
      color: ${colors.secondary};
      font-size: 14px;
      font-weight: 600;
      height: 100%;

      &:hover {
        text-decoration: underline;
      }
    }

    &.active {
      border-bottom: 2px solid #484848;

      a {
        color: #484848;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1128px) {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: 600;

    svg {
      margin-right: 10px;
      font-size: 17px;
    }
  }
`;
