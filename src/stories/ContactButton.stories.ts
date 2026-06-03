import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactButton } from '../components';

const meta = {
  title: 'Example/ContactButton',
  component: ContactButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {};
