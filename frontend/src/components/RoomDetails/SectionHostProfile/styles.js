import styled from 'styled-components';
import colors from '~/styles/colors';

const divider = {
  paddingBottom: '20px',
  borderBottom: '1px solid #ebebeb',
  marginBottom: '20px',
};

export const Container = styled.section`
  font-size: 16px;
  margin-bottom: 40px;
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

export const AlertAirbnb = styled.div`
  ${divider};
`;

export const AboutThisPlace = styled.div`
  ${divider};

  > strong {
    display: block;
    margin-bottom: 16px;
  }

  > p {
    margin-bottom: 20px;
  }
`;

export const AboutTheHost = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -20px;

  > div {
    width: calc(33.3% - 10px);
    font-size: 16px;
    color: #484848;
    padding: 0 20px;
    margin-bottom: 20px;

    span {
      display: block;
      opacity: 0.8;
      margin-bottom: 10px;
    }
  }
`;
