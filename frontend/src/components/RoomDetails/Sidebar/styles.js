import styled from 'styled-components';
// import colors from '~/styles/colors';

export const Container = styled.div`
  position: absolute;
  width: 376px;
  top: 24px;
  transition: all 0.5s;

  &.fixed {
    position: fixed;
    top: 80px;
  }

  @media (max-width: 744px) {
    display: none;
  }
`;

export const Card = styled.div`
  width: 100%;
  border: 1px solid #ebebeb;
  padding: 20px;
  border-radius: 2px;
`;

export const Price = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 20px;
  margin-bottom: 20px;

  .price {
    strong {
      font-size: 22px;
    }
  }

  .comments {
    font-size: 12px;

    svg {
      margin-right: 2px;
    }

    strong {
      font-weight: 600;
    }

    span {
      color: #767676;
    }
  }
`;

export const Form = styled.form`
  .btn-primary {
    margin: 20px 0 10px;

    + span {
      width: 100%;
      text-align: center;
      font-weight: 600;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #ebebeb;
  padding-top: 24px;
  margin-top: 24px;

  strong {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
  }

  img {
    width: 50px;
  }
`;

export const DenounceAds = styled.div`
  display: block;
  text-align: center;
  padding: 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #484848;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-right: 5px;
    }
  }
`;
