import { useState } from 'react'

export type StepProps<Form extends Record<string, any>> = {
  formData: Form
  setData: <Key extends keyof Form>(key: Key, value: Form[Key]) => void
}

const useForm = <Form extends Record<string, any>>(
  initialData: Form,
  numberOfSteps: number
): {
  step: number
  nextStep: () => void
  stepProps: StepProps<Form>
} => {
  const [step, setStep] = useState(0)
  const nextStep = () => setStep((s) => Math.min(s + 1, numberOfSteps - 1))

  const [formData, setFormData] = useState<Form>(initialData)

  const setData: StepProps<Form>['setData'] = (key, value) =>
    setFormData((data) => ({ ...data, [key]: value }))

  return { step, nextStep, stepProps: { formData, setData } }
}

export default useForm
