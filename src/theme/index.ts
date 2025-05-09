import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './components/button';

// Define color palette
const colors = {
  orange: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97316', // Primary orange from image
    600: '#EA580C',
    700: '#C2410C',
    800: '#9A3412',
    900: '#7C2D12',
  },
  teal: {
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488', // Primary teal from image
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
  },
  charcoal: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#333333', // Primary charcoal from image
  },
  white: '#FFFFFF',
};

// Define the custom theme
const theme = extendTheme({
  colors,
  fonts: {
    heading: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    body: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
  components: {
    Button: buttonTheme,
  },
});

export default theme;