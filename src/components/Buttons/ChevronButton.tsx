import React from 'react';
import { IconButton } from './IconButton';
import { ChevronRight } from 'lucide-react';
import { ButtonVariant, ButtonSize } from './Button';

export interface ChevronButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  'aria-label'?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const ChevronButton: React.FC<ChevronButtonProps> = ({
  variant = 'chevron-orange',
  size = 'md',
  'aria-label': ariaLabel = 'Next',
  onClick,
  isDisabled = false,
  ...props
}) => {
  return (
    <IconButton
      icon={<ChevronRight size={size === 'sm' ? 16 : 20} />}
      variant={variant}
      size={size}
      isChevron={true}
      aria-label={ariaLabel}
      onClick={onClick}
      isDisabled={isDisabled}
      {...props}
    />
  );
};

export default ChevronButton;