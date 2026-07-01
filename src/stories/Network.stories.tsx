import type { Meta, StoryObj } from '@storybook/react-vite';
import { Network } from '../components';
import { GithubLogo } from '../assets/icons';

const meta = {
  title: 'Example/Network',
  component: Network,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Network>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
  render: (args) => <Network {...args} logo={<GithubLogo />} />,
  args: {
    name: 'Network',
    link: 'https://example.com/',
  },
};
