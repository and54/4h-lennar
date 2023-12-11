import { createTheme } from '@mui/material';

export const materialTheme = createTheme({
  palette: {
    primary: {
      main: '#6366F1',
    },
    secondary: {
      main: '#4B5563',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 834,
      lg: 1080,
      xl: 1280,
    }
  },
});



