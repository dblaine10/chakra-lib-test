import { defineStyleConfig } from '@chakra-ui/react';

export const buttonTheme = defineStyleConfig({
  // Base styles applied to all button variants
  baseStyle: {
    fontWeight: 'medium',
    borderRadius: 'full',
    transition: 'all 0.2s ease-in-out',
    _hover: {
      transform: 'translateY(-1px)',
    },
    _active: {
      transform: 'translateY(0)',
    },
    _focus: {
      boxShadow: 'outline',
    },
  },
  // Styles for different visual variants
  variants: {
    // Primary buttons
    primary: {
      bg: 'orange.500',
      color: 'white',
      _hover: {
        bg: 'orange.600',
      },
      _disabled: {
        bg: 'orange.300',
        _hover: { bg: 'orange.300' },
      },
    },
    'primary-teal': {
      bg: 'teal.600',
      color: 'white',
      _hover: {
        bg: 'teal.700',
      },
      _disabled: {
        bg: 'teal.300',
        _hover: { bg: 'teal.300' },
      },
    },
    'primary-charcoal': {
      bg: 'charcoal.900',
      color: 'white',
      _hover: {
        bg: 'charcoal.800',
      },
      _disabled: {
        bg: 'charcoal.600',
        _hover: { bg: 'charcoal.600' },
      },
    },
    'primary-white': {
      bg: 'white',
      color: 'charcoal.900',
      border: '1px solid',
      borderColor: 'charcoal.200',
      _hover: {
        bg: 'gray.50',
      },
      _disabled: {
        bg: 'gray.100',
        color: 'gray.500',
        _hover: { bg: 'gray.100' },
      },
    },
    
    // Secondary buttons - outlined style
    secondary: {
      bg: 'transparent',
      color: 'orange.500',
      border: '1px solid',
      borderColor: 'orange.500',
      _hover: {
        bg: 'orange.50',
      },
      _disabled: {
        color: 'orange.300',
        borderColor: 'orange.300',
        _hover: { bg: 'transparent' },
      },
    },
    'secondary-teal': {
      bg: 'transparent',
      color: 'teal.600',
      border: '1px solid',
      borderColor: 'teal.600',
      _hover: {
        bg: 'teal.50',
      },
      _disabled: {
        color: 'teal.300',
        borderColor: 'teal.300',
        _hover: { bg: 'transparent' },
      },
    },
    'secondary-charcoal': {
      bg: 'transparent',
      color: 'charcoal.900',
      border: '1px solid',
      borderColor: 'charcoal.900',
      _hover: {
        bg: 'gray.100',
      },
      _disabled: {
        color: 'charcoal.400',
        borderColor: 'charcoal.400',
        _hover: { bg: 'transparent' },
      },
    },
    'secondary-white': {
      bg: 'transparent',
      color: 'white',
      border: '1px solid',
      borderColor: 'white',
      _hover: {
        bg: 'whiteAlpha.200',
      },
      _disabled: {
        color: 'whiteAlpha.500',
        borderColor: 'whiteAlpha.500',
        _hover: { bg: 'transparent' },
      },
    },
    
    // Tertiary buttons - ghost style
    tertiary: {
      bg: 'transparent',
      color: 'orange.500',
      _hover: {
        bg: 'orange.50',
      },
      _disabled: {
        color: 'orange.300',
        _hover: { bg: 'transparent' },
      },
    },
    'tertiary-teal': {
      bg: 'transparent',
      color: 'teal.600',
      _hover: {
        bg: 'teal.50',
      },
      _disabled: {
        color: 'teal.300',
        _hover: { bg: 'transparent' },
      },
    },
    'tertiary-charcoal': {
      bg: 'transparent',
      color: 'charcoal.900',
      _hover: {
        bg: 'gray.100',
      },
      _disabled: {
        color: 'charcoal.400',
        _hover: { bg: 'transparent' },
      },
    },
    'tertiary-white': {
      bg: 'transparent',
      color: 'white',
      _hover: {
        bg: 'whiteAlpha.200',
      },
      _disabled: {
        color: 'whiteAlpha.500',
        _hover: { bg: 'transparent' },
      },
    },
    
    // Chevron style - circular with icons
    chevron: {
      borderRadius: 'full',
      minWidth: 'auto',
      height: 'auto',
      aspectRatio: '1/1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
    },
    'chevron-orange': {
      bg: 'orange.500',
      color: 'white',
      _hover: {
        bg: 'orange.600',
      },
      variant: 'chevron',
    },
    'chevron-teal': {
      bg: 'teal.600',
      color: 'white',
      _hover: {
        bg: 'teal.700',
      },
      variant: 'chevron',
    },
    'chevron-charcoal': {
      bg: 'charcoal.900',
      color: 'white',
      _hover: {
        bg: 'charcoal.800',
      },
      variant: 'chevron',
    },
    'chevron-white': {
      bg: 'white',
      color: 'charcoal.900',
      border: '1px solid',
      borderColor: 'charcoal.200',
      _hover: {
        bg: 'gray.50',
      },
      variant: 'chevron',
    },
    
    // Tertiary hover state
    'tertiary-hover-orange': {
      bg: 'orange.500',
      color: 'white',
      _hover: {
        bg: 'orange.600',
      },
    },
    'tertiary-hover-teal': {
      bg: 'teal.600',
      color: 'white',
      _hover: {
        bg: 'teal.700',
      },
    },
    'tertiary-hover-charcoal': {
      bg: 'charcoal.900',
      color: 'white',
      _hover: {
        bg: 'charcoal.800',
      },
    },
    'tertiary-hover-white': {
      bg: 'white',
      color: 'charcoal.900',
      _hover: {
        bg: 'gray.50',
      },
    },
  },
  // Default sizes
  sizes: {
    sm: {
      px: 4,
      py: 1.5,
      fontSize: 'sm',
      height: 8,
    },
    md: {
      px: 5,
      py: 2,
      fontSize: 'md',
      height: 10,
    },
    lg: {
      px: 6,
      py: 2.5,
      fontSize: 'lg',
      height: 12,
    },
    chevron: {
      width: 10,
      height: 10,
      padding: 0,
      minWidth: 'auto',
    },
    'chevron-sm': {
      width: 8,
      height: 8,
      padding: 0,
      minWidth: 'auto',
    },
  },
  // Default configuration for all buttons
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
});