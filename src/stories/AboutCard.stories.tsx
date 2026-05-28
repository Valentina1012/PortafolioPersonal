import type { Meta, StoryObj } from '@storybook/react-vite';
import Github from '../assets/icons/GithubLogo.svg?react';
import AboutCard from '../components/AboutCard';

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
  render: (args) => (
    <AboutCard
      {...args}
      icon={<Github />}
    />
  ),
  args: {
    title: 'Title',
    link: 'https://github.com/Valentina1012',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc luctus commodo.',
    hasDownloadableLink: false,
  },
};

export const WithDescription: Story = {
  render: (args) => <AboutCard {...args} icon={<Github />} />,
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    hasDownloadableLink: false,
  },
};
