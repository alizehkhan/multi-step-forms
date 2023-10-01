import { StepProps } from '../useForm'

const Email = <Form extends { email: string }>({
  formData,
  setData,
}: StepProps<Form>) => {
  return (
    <>
      <label htmlFor="email" className="text-lg font-bold">
        Email
      </label>
      <input
        className="px-4 py-2 border-gray-400 border-solid border-[1px] w-full rounded-md block text-xl"
        required
        autoComplete="off"
        id="email"
        name="email"
        type="email"
        onChange={(e) => setData('email', e.target.value)}
        value={formData.email}
      ></input>
    </>
  )
}

export default Email
