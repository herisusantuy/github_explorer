import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'GithubExplorer/Button',
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Disabled'
  }
};

export const Small: Story = {
  args: {
    disabled: false,
    size: 'small',
    text: 'Small'
  }
};

export const Medium: Story = {
  args: {
    disabled: false,
    size: 'medium',
    text: 'Medium'
  }
};

export const Large: Story = {
  args: {
    disabled: false,
    size: 'large',
    text: 'Large'
  }
};
