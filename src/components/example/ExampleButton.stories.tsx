import type { Meta, StoryObj } from '@storybook/react';
import { ExampleButton } from './ExampleButton';

const meta = {
  title: 'Example/Button',
  component: ExampleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'green', 'red'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
  },
} satisfies Meta<typeof ExampleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '버튼',
    color: 'blue',
    size: 'default',
  },
};

export const Green: Story = {
  args: {
    title: '초록 버튼',
    color: 'green',
  },
};

export const Large: Story = {
  args: {
    title: '큰 버튼',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    title: '비활성화',
    disabled: true,
  },
};

