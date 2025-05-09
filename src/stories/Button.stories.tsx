import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Plus, X } from 'lucide-react';

import { Button } from '../components/Buttons/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'primary-teal',
        'primary-charcoal',
        'primary-white',
        'secondary',
        'secondary-teal',
        'secondary-charcoal',
        'secondary-white',
        'tertiary',
        'tertiary-teal',
        'tertiary-charcoal',
        'tertiary-white',
        'tertiary-hover-orange',
        'tertiary-hover-teal',
        'tertiary-hover-charcoal',
        'tertiary-hover-white',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary Button Stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Label',
  },
};

export const PrimaryWithLeftIcon: Story = {
  args: {
    ...Primary.args,
    leftIcon: <Plus size={18} />,
  },
};

export const PrimaryWithRightIcon: Story = {
  args: {
    ...Primary.args,
    rightIcon: <ArrowRight size={18} />,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
};

// Secondary Button Stories
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Label',
  },
};

export const SecondaryWithLeftIcon: Story = {
  args: {
    ...Secondary.args,
    leftIcon: <Plus size={18} />,
  },
};

export const SecondaryWithRightIcon: Story = {
  args: {
    ...Secondary.args,
    rightIcon: <ArrowRight size={18} />,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    ...Secondary.args,
    isDisabled: true,
  },
};

// Tertiary Button Stories
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Label',
  },
};

export const TertiaryWithLeftIcon: Story = {
  args: {
    ...Tertiary.args,
    leftIcon: <Plus size={18} />,
  },
};

export const TertiaryWithRightIcon: Story = {
  args: {
    ...Tertiary.args,
    rightIcon: <ArrowRight size={18} />,
  },
};

export const TertiaryDisabled: Story = {
  args: {
    ...Tertiary.args,
    isDisabled: true,
  },
};

// Tertiary Hover State Button Stories
export const TertiaryHover: Story = {
  args: {
    variant: 'tertiary-hover-orange',
    children: 'Label',
  },
};

export const TertiaryHoverWithLeftIcon: Story = {
  args: {
    ...TertiaryHover.args,
    leftIcon: <Plus size={18} />,
  },
};

export const TertiaryHoverWithRightIcon: Story = {
  args: {
    ...TertiaryHover.args,
    rightIcon: <X size={18} />,
  },
};

// Size Variants
export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'lg',
  },
};

// Different Colors
export const PrimaryTeal: Story = {
  args: {
    variant: 'primary-teal',
    children: 'Label',
  },
};

export const PrimaryCharcoal: Story = {
  args: {
    variant: 'primary-charcoal',
    children: 'Label',
  },
};

export const PrimaryWhite: Story = {
  args: {
    variant: 'primary-white',
    children: 'Label',
  },
};