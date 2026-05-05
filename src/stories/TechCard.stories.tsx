import type { Meta, StoryObj } from '@storybook/react-vite';
import React from '../assets/logos/ReactLogo.svg?react';
import TechCard from '../components/TechCard';

const meta = {
  title: 'Example/TechCard',
  component: TechCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TechCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
  render: (args) => <TechCard {...args} icon={<React />} />,
  args: {
    name: 'React',
  },
};
