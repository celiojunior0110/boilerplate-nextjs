import type { Meta, StoryObj } from '@storybook/react'

import Main from '.'

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main
}

export default meta

type Story = StoryObj<typeof Main>

export const Basic: Story = {
  render: (args) => <Main {...args} />
}
