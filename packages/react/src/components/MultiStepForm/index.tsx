import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepFormProps {
  size: number
  currentStep?: number
}

export function MultiStepForm({ size, currentStep = 1 }: MultiStepFormProps) {
  return (
    <MultiStepContainer>
      <Label>
        Step {currentStep} of {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
