import type { Meta, StoryObj } from '@storybook/react-vite';
import IconAnchor from '../components/IconAnchor';
import Globe from '../assets/icons/Globe.svg?react';

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
  render: (args) => (<IconAnchor {...args} icon={<Globe />} />),
  args: {
    link: 'https://example.com'
  },
};
