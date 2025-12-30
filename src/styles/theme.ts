export const theme = {
  colors: {
    primary: '#1da1f2',
    primaryHover: '#1a91da',
    error: '#e0245e',
    success: '#17bf63',
    warning: '#ffad1f',

    text: {
      primary: '#14171a',
      secondary: '#657786',
      disabled: '#aab8c2',
    },

    background: {
      primary: '#ffffff',
      secondary: '#f5f8fa',
      hover: '#f7f9fa',
    },

    border: {
      light: '#e1e8ed',
    },

    completed: '#657786',
  },

  typography: {
    fontFamily: {
      primary:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },

    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
      xxxl: '32px',
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
    huge: '48px',
  },

  breakpoints: {
    xs: '424px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const

export type Theme = typeof theme
