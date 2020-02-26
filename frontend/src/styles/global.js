import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html, body, #root {
      min-height: 100vh;
      overflow-x: hidden;
  }

  body {
      background: #fff;
      -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
      color: #484848;
      line-height: 1.43;
      font-size: 14px;
      font-family: Circular, Arial, Helvetica Neue, sans-serif;
  }

  button {
      cursor: pointer;
      background: transparent;
      border: 0;
      border-radius: 4px;
  }

  a {
    cursor: pointer;
  }

  .block {
    display: block;
    width: 100%;
  }

  .text-center {
    text-align: center;
  }

  .bold {
    font-weight: bold;
  }
`;
