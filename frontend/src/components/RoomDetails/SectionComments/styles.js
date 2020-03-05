import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.section`
  font-size: 16px;
  margin-bottom: 70px;
`;

export const Header = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .qtd-comments {
      font-size: 18px;

      .rate {
        display: flex;
        align-items: center;
        margin-right: 16px;
        padding-right: 16px;
        border-right: 1px solid #ebebeb;

        svg {
          margin-right: 5px;
        }
      }

      .qtd {
        strong {
          margin-right: 5px;
        }
      }
    }
  }
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 6px 10px;

  &:focus-within {
    border: 1px solid ${colors.secondary};
  }

  input {
    border: 0;
    margin-right: 10px;
  }
`;

export const Statistics = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 5px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: calc(50% - 32px);
      margin-bottom: 16px;

      > div {
        display: flex;
        align-items: center;

        .barra {
          flex: 1;
          width: 90px;
          height: 4px;
          margin-right: 10px;
          background: ${colors.secondary};
          border-radius: 5px;
        }
      }
    }
  }
`;

export const BtnTranslate = styled.button`
  width: 100%;
  padding: 5px 10px;
  font-weight: 600;
  border: 1px solid #484848;
  margin-bottom: 16px;
`;

export const ListComments = styled.div``;

export const Comment = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 20px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .meta {
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      small {
        font-size: 14px;
      }
    }
  }
`;

export const Pagination = styled.div`
  ul {
    display: flex;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 25px;

      span {
        position: relative;
        top: -5px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-align: center;
        color: ${colors.secondary};

        &:hover {
          text-decoration: underline;
        }
      }

      &.active {
        background: ${colors.secondary};
        button {
          color: #fff;
        }
      }

      &:last-child {
        border: 1px solid ${colors.secondary};
      }
    }
  }
`;
