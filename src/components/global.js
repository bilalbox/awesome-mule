import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  a.footer {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    width: 100%;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.1s linear;
  }

  button {
    background: ${({ theme }) => theme.panel};
  }

  .content {
    width: 100%;
    display: flex;
  }

  .collapse-panel {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 20px;
  }
  
  div.collapse-trigger {
    background: ${({ theme }) => theme.panel};
    color: ${({ theme }) => theme.text};
    font-size: 20px;
  }
  div.collapse-trigger:hover {
    color: ${({ theme }) => theme.hoverText};
    font-weight: 500;
  }

  footer {
    padding-top: 10px;
    margin-top: 100px; /* space between content and footer */
    margin-bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: ${({ theme }) => theme.text};
  }

  header {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 40px;
    color: ${({ theme }) => theme.text};
  }

  li:hover {
    font-weight: 500;
    color: ${({ theme }) => theme.hoverText};
  }
  
  svg {
    fill: ${({ theme }) => theme.text};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }


`
