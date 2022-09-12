import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #2a2b2e inset !important;
    }
    input:-webkit-autofill{
    -webkit-text-fill-color: white !important;
    }
  }



  html{
   scroll-behavior: smooth;

   @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #090a10;
    color: #fff;
  }

  html, body{
    // height: 100%;
    height: auto!important;
    min-height: 100%;
  }

  body, input, button, textarea {
    font-family: 'Montserrat', sans-serif;

  }

  button{
    cursor: pointer;
    outline: none;
    &:focus {
      outline: transparent !important;
    }
  }

  [disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none !important;
  }
`;
