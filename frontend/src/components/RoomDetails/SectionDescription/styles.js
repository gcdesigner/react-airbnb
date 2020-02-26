import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  font-size: 16px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 250px;

  p {
    margin-bottom: 20px;
  }

  .translate {
    margin-bottom: 15px;

    button {
      width: 100%;
      border: 1px solid #484848;
      font-weight: 600;
      padding: 5px 15px;
    }
  }

  .all-description {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s, opacity 0.5s;

    &.show {
      max-height: 1000px;
      transition: max-height 1s, opacity 0.5s;
    }

    strong {
      display: block;
      margin-bottom: 20px;
    }
  }

  .show-more {
    display: flex;
    align-items: center;
    color: ${colors.secondary};
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 30px;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-left: 5px;
    }
  }

  .talk-proprietary {
    color: ${colors.secondary};
    font-weight: 600;
    font-size: 16px;
  }
`;
