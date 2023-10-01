import { Age, Email, Name } from '../steps'
import { DesignerSummary } from '../summaries'
import useForm from '../useForm'

const DesignerForm = () => {
  const steps = [Name, Age, Email, DesignerSummary]
  const { step, nextStep, stepProps } = useForm(
    { age: '', email: '', firstName: '', lastName: '' },
    steps.length
  )

  return (
    <>
      <h1 className="text-3xl font-bold">Designer Insurance</h1>
      <form
        className="py-8 bg-white shadow-sm rounded-md px-12 max-w-full w-[400px] mt-6"
        onSubmit={(event) => {
          event.preventDefault()
          nextStep()
        }}
      >
        {steps[step](stepProps)}

        {step < steps.length - 1 && (
          <button
            type="submit"
            className="block bg-green-800 mt-8 text-white rounded-md px-4 py-2"
          >
            Continue
          </button>
        )}
      </form>
    </>
  )
}

export default DesignerForm
