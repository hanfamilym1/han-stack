import type { Meta, StoryObj } from '@storybook/react';

import Paragraph from '../app/components/ui/Paragraph';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Paragraph> = {
  title: 'Example/Paragraph',
  component: Paragraph,
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
    args: {
        text: 'This is a paragraph'
    }
}