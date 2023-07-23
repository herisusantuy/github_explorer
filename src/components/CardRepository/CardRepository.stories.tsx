import { Meta, StoryObj } from '@storybook/react';
import CardRepository from './CardRepository';

const meta: Meta<typeof CardRepository> = {
  component: CardRepository,
  title: 'GithubExplorer/CardRepository',
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof CardRepository>;

export const FilledCardRepository: Story = {
  args: {
    title: 'AI for humans',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio rerum dolor eveniet? Nam consequuntur rerum quis ducimus placeat odio, sed dolorum quae, alias numquam commodi cumque doloribus, officia totam!',
    star: 100
  }
};
