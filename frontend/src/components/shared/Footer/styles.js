import styled from 'styled-components';
import colors from '~/styles/colors';
import { shade } from 'polished';

export const Container = styled.footer`
  border-top: 1px solid #ebebeb;
  margin-top: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 50px 0 20px;

  @media (max-width: 744px) {
    display: none;
  }
`;

export const Widget = styled.div`
  width: 100%;
  flex: 1;

  strong {
    display: block;
    margin-bottom: 15px;
  }

  a {
    display: block;
    color: #767676;
    margin-bottom: 2px;

    &:hover {
      text-decoration: underline;
    }

    span {
      background: ${shade(0.2, colors.secondary)};
      border-radius: 4px;
      color: #fff;
      font-weight: 600;
      font-size: 12px;
      padding: 1px 5px;
      margin-left: 5px;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 0 15px 5px 0;
  }
`;

export const CopyRight = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #ebebeb;

  svg {
    margin-right: 10px;
  }

  @media (max-width: 744px) {
    border-top: 0;
    padding-top: 40px;
  }
`;
