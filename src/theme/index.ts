import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './components/button';

const theme = extendTheme({
  components: {
    Button: buttonTheme,
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  colors: {
    orange: {
      500: '#FF5C00',
      600: '#CC4900',
    },
    teal: {
      500: '#00A3B0',
      600: '#00828D',
    },
    charcoal: {
      500: '#2D3338',
      600: '#242A2E',
      900: '#1A1D1F',
    },
  },
});

export default theme;