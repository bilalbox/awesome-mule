import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    header {
      width: 100%;
      text-align: center;
      flex: 1;
      color: ${({ theme }) => theme.text};
    }

    button {
      background: ${({ theme }) => theme.panel};
    }
    svg {
      fill: ${({ theme }) => theme.text};
    }
    a.header {
      text-align: center;
      font-size: 40px;
      font-weight: 500;
      flex: 1;
      font-family: 'Impact';
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

    footer {
      padding-top: 10px;
      margin-top: 100px; /* space between content and footer */
      bottom: 0;
      width: 100%;
      text-align: center;
      font-size: 18px;
      color: ${({ theme }) => theme.text};
    }

    a.footer {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
  }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li:hover {
      font-weight: 500;
      color: ${({ theme }) => theme.hoverText};
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
  `
