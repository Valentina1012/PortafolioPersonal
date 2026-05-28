import type { Meta, StoryObj } from '@storybook/react-vite';
import IconAnchor from '../components/IconAnchor';

const meta = {
  title: 'Example/IconAnchor',
  component: IconAnchor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconAnchor>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
};
