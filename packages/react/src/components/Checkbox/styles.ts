import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$nightcreek300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $nightcreek300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'scale(0)',
  },
  to: {
    transform: 'scale(100%)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'scale(100%)',
  },
  to: {
    transform: 'scale(50%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 100ms ease-in`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 50ms ease-out`,
  },
})
