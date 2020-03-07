import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const Breadcrumb = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
  padding: 40px 0 20px;

  a {
    color: #484848;
  }
`;
