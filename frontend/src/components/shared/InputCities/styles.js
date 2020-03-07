import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  /* font-weight: 800; */
  font-size: 12px;
  margin-bottom: 5px;
  letter-spacing: 0.88px;
`;

export const Container = styled.div`
  height: 46px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  margin-bottom: 16px;

  .input-cities {
    .ic__control {
      border: 0;
      font-size: 16px;
      /* font-weight: bold; */
      height: 44px;

      &:hover {
        border-color: #ebebeb;
        box-shadow: none;
      }
    }

    .ic__indicator-separator {
      display: none;
    }

    .ic__indicators {
      display: none;
    }

    .ic__menu {
      top: 35px;
      box-shadow: none;
      border: 1px solid #ebebeb;
      border-top: 0;
      border-radius: 0 0 3px 3px;
    }
  }
`;
