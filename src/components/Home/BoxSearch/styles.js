import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 744px) {
    margin-left: -24px;
    margin-right: -24px;
  }
`;

export const Card = styled.div`
  width: 508px;
  background: #fff;
  border-radius: 4px;
  padding: 32px;
  margin-bottom: 15px;

  h1 {
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 20px;
  }

  select {
    font-weight: normal;
  }

  @media (max-width: 744px) {
    width: 100%;
    padding: 32px 24px;
    border-radius: 0;
    margin-bottom: 0;
  }
`;

export const Ads = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 508px;
  background: #fff;
  border-radius: 4px;
  padding: 11px 32px;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.2;

    &:first-child {
      border-right: 1px solid #e5e5e5;
    }
  }

  p > button {
    position: relative;
    top: 2px;
    margin-left: 5px;
  }

  span {
    margin-right: 15px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    color: #484848;
    font-weight: 800;
    text-align: right;
  }

  @media (max-width: 744px) {
    width: calc(100% - 48px);
    border-radius: 0;
    border: 1px solid #ebebeb;
    border-right: 0;
    border-left: 0;
    padding: 30px 0;
    margin: 0 auto;

    > div {
      justify-content: flex-start;
      font-size: 16px;

      &:first-child {
        border-right: 0;
      }

      &:last-child {
        width: 50px;
        flex: 0;

        span {
          display: none;
        }
      }
    }
  }
`;
