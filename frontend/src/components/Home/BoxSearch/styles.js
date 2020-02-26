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

  @media (max-width: 744px) {
    width: 100%;
    border-radius: 0;
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
    display: none;
  }
`;
