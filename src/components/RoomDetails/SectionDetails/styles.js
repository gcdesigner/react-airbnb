import styled from 'styled-components';

export const Container = styled.section`
  padding: 15px 0 5px;
  border-bottom: 1px solid #ebebeb;
  font-size: 16px;
  margin-bottom: 20px;

  ul.top {
    display: flex;
    border-bottom: 1px solid #ebebeb;
    padding: 0 0 20px;
    margin-bottom: 20px;

    li {
      margin-right: 20px;
    }
  }

  ul.bottom {
    li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;

      svg {
        position: relative;
        top: 5px;
        min-width: 15px;
        min-height: 15px;
        margin-right: 15px;
      }
    }
  }
`;
