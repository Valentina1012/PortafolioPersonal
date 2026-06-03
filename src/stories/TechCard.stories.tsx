import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReactLogo } from '../assets/logos';
import { TechCard } from '../components';

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
  render: (args) => <TechCard {...args} icon={<ReactLogo />} />,
  args: {
    name: 'React',
  },
};
