import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: #f8fafc;
    --color-surface: #ffffff;
    --color-text: #111827;
    --color-muted: #6b7280;
    --color-border: #e5e7eb;
    --color-primary: #4f46e5;
    --color-primary-hover: #4338ca;
    --radius-sm: 6px;
    --radius-md: 8px;
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
    --shadow-md: 0 4px 10px rgba(0,0,0,0.08);
    --shadow-lg: 0 10px 30px rgba(0,0,0,0.15);
    color-scheme: light;
  }

  :root[data-theme="dark"] {
    --color-bg: #0b1220;
    --color-surface: #111827;
    --color-text: #e5e7eb;
    --color-muted: #9aa0a6;
    --color-border: #1f2937;
    --color-primary: #818cf8;
    --color-primary-hover: #a5b4fc;
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
    --shadow-md: 0 4px 10px rgba(0,0,0,0.45);
    --shadow-lg: 0 10px 30px rgba(0,0,0,0.6);
    color-scheme: dark;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      /* Force light palette even when system prefers dark */
      --color-bg: #f8fafc;
      --color-surface: #ffffff;
      --color-text: #111827;
      --color-muted: #6b7280;
      --color-border: #e5e7eb;
      --color-primary: #4f46e5;
      --color-primary-hover: #4338ca;
      --shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
      --shadow-md: 0 4px 10px rgba(0,0,0,0.08);
      --shadow-lg: 0 10px 30px rgba(0,0,0,0.15);
    }
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--color-bg);
    color: var(--color-text);
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;


