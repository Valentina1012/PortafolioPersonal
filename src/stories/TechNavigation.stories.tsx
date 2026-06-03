import type { Meta, StoryObj } from '@storybook/react-vite';
import { TechNavigation } from '../components';

const meta = {
  title: 'Example/TechNavigation',
  component: TechNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TechNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {};
