import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.section`
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 40px;
  font-size: 16px;

  button {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.secondary};
  }
`;

export const Header = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 20px;

  > div {
    margin-bottom: 10px;
    strong {
    }
  }
`;

export const HomeRules = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -20px;

    li {
      width: calc(50% - 20px);
      padding: 15px 20px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 16px;
      }
    }
  }

  button {
    margin-top: 10px;
  }
`;

export const Cancellation = styled.div`
  h3 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
  }
`;
