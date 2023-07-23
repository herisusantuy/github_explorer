import { Meta, StoryObj } from '@storybook/react';
import CardUser from './CardUser';

const meta: Meta<typeof CardUser> = {
  component: CardUser,
  title: 'GithubExplorer/CardUser',
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof CardUser>;

export const CollapseCardUser: Story = {
  args: {
    username: 'john.doe',
    onClick: () => console.log('john.doe')
  }
};

export const ExpandedCardUser: Story = {
  args: {
    username: 'john.doe',
    onClick: () => console.log('john.doe')
  }
};
