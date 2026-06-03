import type { Meta, StoryObj } from '@storybook/react-vite';
import { GithubLogo } from '../assets/icons';
import { AboutCard } from '../components';

const meta = {
  title: 'Example/AboutCard',
  component: AboutCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const WithLink: Story = {
  render: (args: Story['args']) => (
    <AboutCard
      {...args}
      icon={<GithubLogo />}
    />
  ),
  args: {
    title: 'Title',
    link: 'https://github.com/Valentina1012',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo.',
    hasDownloadableLink: false,
    linkContent: 'github.com/Valentina1012',
  },
};

export const WithDescription: Story = {
  render: (args: Story['args']) => <AboutCard {...args} icon={<GithubLogo />} />,
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    hasDownloadableLink: false,
    
  },
};
