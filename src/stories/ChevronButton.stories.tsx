import type { Meta, StoryObj } from '@storybook/react';
import { ChevronButton } from '../components/Buttons/ChevronButton';

const meta: Meta<typeof ChevronButton> = {
  title: 'Components/ChevronButton',
  component: ChevronButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'chevron-orange',
        'chevron-teal',
        'chevron-charcoal',
        'chevron-white',
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
type Story = StoryObj<typeof ChevronButton>;

export const Orange: Story = {
  args: {
    variant: 'chevron-orange',
  },
};

export const Teal: Story = {
  args: {
    variant: 'chevron-teal',
  },
};

export const CharcoalGrey: Story = {
  args: {
    variant: 'chevron-charcoal',
  },
};

export const White: Story = {
  args: {
    variant: 'chevron-white',
  },
};

export const Small: Story = {
  args: {
    ...Orange.args,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    ...Orange.args,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    ...Orange.args,
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    ...Orange.args,
    isDisabled: true,
  },
};