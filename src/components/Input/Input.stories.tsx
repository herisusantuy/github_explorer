import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'GithubExplorer/InputField',
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Input>;

export const DefaultInputField: Story = {
  args: {
    placeholder: 'Enter username',
    value: 'John Doe'
  }
};
