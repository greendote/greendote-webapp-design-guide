export const typographyStyle = {
  typography: {
    'header-bold': {
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: 1.3333,
    },
    'header-md': {
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.3333,
    },
    'header-sm': {
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    'title-lg': {
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.44444,
    },
    'title-md': {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    'title-sm': {
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.57143,
    },
    'body-bold': {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    'body-md': {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    'body-sm': {
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.57143,
    },
    'body-xs': {
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.66667,
    },
    'label-bold': {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    'label-md': {
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    'label-sm': {
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.14286,
    },
    'label-xs': {
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.33333,
    },
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'header-bold': React.CSSProperties;
    'header-md': React.CSSProperties;
    'header-sm': React.CSSProperties;
    'title-lg': React.CSSProperties;
    'title-md': React.CSSProperties;
    'title-sm': React.CSSProperties;
    'body-bold': React.CSSProperties;
    'body-md': React.CSSProperties;
    'body-sm': React.CSSProperties;
    'body-xs': React.CSSProperties;
    'label-bold': React.CSSProperties;
    'label-md': React.CSSProperties;
    'label-sm': React.CSSProperties;
    'label-xs': React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    'header-bold': React.CSSProperties;
    'header-md': React.CSSProperties;
    'header-sm': React.CSSProperties;
    'title-lg': React.CSSProperties;
    'title-md': React.CSSProperties;
    'title-sm': React.CSSProperties;
    'body-bold': React.CSSProperties;
    'body-md': React.CSSProperties;
    'body-sm': React.CSSProperties;
    'body-xs': React.CSSProperties;
    'label-bold': React.CSSProperties;
    'label-md': React.CSSProperties;
    'label-sm': React.CSSProperties;
    'label-xs': React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'header-bold': true;
    'header-md': true;
    'header-sm': true;
    'title-lg': true;
    'title-md': true;
    'title-sm': true;
    'body-bold': true;
    'body-md': true;
    'body-sm': true;
    'body-xs': true;
    'label-bold': true;
    'label-md': true;
    'label-sm': true;
    'label-xs': true;
  }
}
