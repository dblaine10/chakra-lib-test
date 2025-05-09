import React from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { DivideIcon as LucideIcon } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'primary-teal'
  | 'primary-charcoal'
  | 'primary-white'
  | 'secondary'
  | 'secondary-teal'
  | 'secondary-charcoal'
  | 'secondary-white'
  | 'tertiary'
  | 'tertiary-teal'
  | 'tertiary-charcoal'
  | 'tertiary-white'
  | 'tertiary-hover-orange'
  | 'tertiary-hover-teal'
  | 'tertiary-hover-charcoal'
  | 'tertiary-hover-white'
  | 'chevron-orange'
  | 'chevron-teal'
  | 'chevron-charcoal'
  | 'chevron-white';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<ChakraButtonProps, 'leftIcon' | 'rightIcon'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactElement<LucideIcon> | null;
  rightIcon?: React.ReactElement<LucideIcon> | null;
  iconOnly?: boolean;
  isChevron?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon = null,
  rightIcon = null,
  iconOnly = false,
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
    <ChakraButton
      variant={buttonVariant}
      size={buttonSize}
      leftIcon={!iconOnly && leftIcon ? leftIcon : undefined}
      rightIcon={!iconOnly && rightIcon ? rightIcon : undefined}
      {...props}
    >
      {iconOnly ? leftIcon || rightIcon : children}
    </ChakraButton>
  );
};

export default Button;