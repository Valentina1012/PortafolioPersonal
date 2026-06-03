import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code } from '../assets/icons';
import { TechTag } from '../components';

const meta = {
  title: 'Example/TechTag',
  component: TechTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TechTag>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
  render: (args) => <TechTag {...args} icon={<Code />} />,
  args: {
    name: 'Tech',
  },
};
