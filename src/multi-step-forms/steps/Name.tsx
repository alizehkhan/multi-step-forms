import { StepProps } from '../useForm'

const Name = <Form extends { firstName: string; lastName: string }>({
  formData,
  setData,
}: StepProps<Form>) => {
  return (
    <>
      <label className="text-lg font-bold" htmlFor="firstName">
        First name
      </label>
      <input
        className="px-4 py-2 border-gray-400 border-solid border-[1px] w-full rounded-md block mb-4 text-xl"
        required
        autoComplete="off"
        id="firstName"
        name="firstName"
        onChange={(e) => setData('firstName', e.target.value)}
        value={formData.firstName}
      ></input>
      <label className="text-lg font-bold" htmlFor="lastName">
        Last name
      </label>
      <input
        className="px-4 py-2 border-gray-400 border-solid border-[1px] w-full rounded-md block text-xl"
        required
        autoComplete="off"
        id="lastName"
        name="lastName"
        onChange={(e) => setData('lastName', e.target.value)}
        value={formData.lastName}
      ></input>
    </>
  )
}

export default Name
