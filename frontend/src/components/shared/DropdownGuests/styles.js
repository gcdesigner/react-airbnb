import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: relative;
`;

export const DropdownToggle = styled.div`
  label {
    font-size: 12px;
    font-weight: 600;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 46px;
    border: 1px solid #ebebeb;
    padding: 10px 15px;
    font-size: 17px;
  }

  &.show {
    button {
      border-bottom: 2px solid ${colors.secondary};
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  display: none;
  width: 100%;
  border: 1px solid #ddd;
  padding: 20px 15px;
  border-radius: 0 0 3px 3px;
  box-shadow: 0 2px 3px 0 #ebebeb;
  background: #fff;

  &.show {
    display: block;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 16px;
  }

  small {
    font-size: 14px;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    width: 20px;
    margin: 0 20px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }

  .btn-minus,
  .btn-plus {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid ${colors.secondary};
    font-size: 25px;
    color: ${colors.secondary};

    &:disabled {
      opacity: 0.4;
    }

    &:active:not(:disabled) {
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 4px,
        rgb(113, 113, 113) 0px 0px 0px 5px,
        rgba(255, 255, 255, 0.5) 0px 0px 0px 6px;
      transition: box-shadow 0.2s ease 0s;
    }
  }
`;

export const Footer = styled.div``;

export const Text = styled.p`
  margin-bottom: 16px;
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    color: ${colors.secondary};
    font-weight: bold;
    font-size: 16px;
  }
`;
