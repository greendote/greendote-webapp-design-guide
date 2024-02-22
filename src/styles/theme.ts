import { alpha, createTheme } from '@mui/material/styles';

import { primary } from './palette.ts';
import { typographyStyle } from './typography.ts';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filled: true;
  }
}

const defaultTheme = createTheme({
  typography: { ...typographyStyle.typography },
  palette: {
    primary: {
      main: primary[54],
      dark: '#1DC7E2',
      light: '#1DC7E2',
      contrastText: primary[100],
    },
  },
});

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            transition: 'none',
            boxShadow: 'none',
            borderRadius: '12px',
            color: defaultTheme.palette.primary.contrastText,
            backgroundColor: defaultTheme.palette.primary.main,
            // backgroundImage: 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)',
            '&:hover, &:focus': {
              backgroundColor: defaultTheme.palette.primary.dark,
              boxShadow: 'none',
            },
            '&:active': {
              backgroundColor: defaultTheme.palette.primary.light,
            },
            ':disabled': {
              color: defaultTheme.palette.primary.contrastText,
              backgroundColor: alpha(defaultTheme.palette.primary.main, 0.3),
            },
            '.MuiButton-sizeLarge': {
              ...defaultTheme.typography['label-bold'],
            },
            '.MuiButton-sizeMedium': {
              ...defaultTheme.typography['label-md'],
            },
            '.MuiButton-sizeSmall': {
              ...defaultTheme.typography['label-sm'],
            },
          },
        },
      ],
    },
  },
});

export default theme;
