import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStepForm, MultiStepFormProps } from '@nightcreek-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStepForm,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepFormProps>

export const Primary: StoryObj<MultiStepFormProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepFormProps> = {
  args: {
    currentStep: 4,
  },
}
