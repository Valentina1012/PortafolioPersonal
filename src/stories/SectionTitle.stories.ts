import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionTitle } from '../components';

const meta = {
  title: 'Example/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = { args: { title: 'Section Title' } };
