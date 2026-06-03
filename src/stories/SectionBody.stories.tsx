import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionBody } from '../components';

const meta = {
  title: 'Example/SectionBody',
  component: SectionBody,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionBody>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
  render: () => (
    <SectionBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt
      ut elit a convallis. Nam eget consectetur nunc. Aenean venenatis viverra
      nulla, varius euismod purus dapibus ac. Vivamus facilisis diam ac sem
      faucibus, sed imperdiet ligula hendrerit. Vivamus facilisis aliquam
      luctus. Pellentesque vestibulum tincidunt ipsum posuere gravida. Ut porta
      erat sit amet lorem tincidunt, vitae vulputate erat vulputate.
    </SectionBody>
  ),
};
