import React from 'react';
import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';
import { ButtonVariant, ButtonSize } from './Button';

export interface IconButtonProps extends Omit<ChakraIconButtonProps, 'variant'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isChevron?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isChevron = false,
  ...props
}) => {
  // Determine the correct size for chevron buttons
  const buttonSize = isChevron ? (size === 'sm' ? 'chevron-sm' : 'chevron') : size;
  
  // For chevron buttons, we use a specific variant
  const buttonVariant = isChevron 
    ? variant.startsWith('chevron-') 
      ? variant 
      : `chevron-${variant.split('-')[variant.split('-').length - 1]}` 
    : variant;

  return (
    <ChakraIconButton
      variant={buttonVariant}
      size={buttonSize}
      borderRadius="full"
      {...props}
    />
  );
};

export default IconButton;