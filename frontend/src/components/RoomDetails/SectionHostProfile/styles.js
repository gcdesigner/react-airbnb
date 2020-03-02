import styled from 'styled-components';
import colors from '~/styles/colors';

const divider = {
  paddingBottom: '20px',
  borderBottom: '1px solid #ebebeb',
  marginBottom: '20px',
};

export const Container = styled.div`
  font-size: 16px;
  margin-bottom: 150px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 20px;

  .meta {
    flex: 1;

    h2 {
      font-size: 24px;
    }
    p {
      margin-bottom: 16px;
    }

    > div {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }

      span {
        margin-right: 12px;
      }
    }
  }
`;

export const SuperHost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${divider};
`;

export const About = styled.div`
  ${divider};

  p {
    margin-bottom: 20px;
  }

  ul {
    margin-bottom: 5px;
    li {
      margin-bottom: 10px;
    }
  }

  a {
    color: ${colors.secondary};
    font-weight: 600;
  }

  button {
    border: 1px solid ${colors.secondary};
    color: ${colors.secondary};
    border-radius: 3px;
    padding: 7px 15px;
    font-weight: 600;
  }
`;
