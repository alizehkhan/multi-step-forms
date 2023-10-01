import { StepProps } from '../useForm'

const Age = <Form extends { age: string }>({
  formData,
  setData,
}: StepProps<Form>) => {
  return (
    <>
      <label htmlFor="age" className="text-lg font-bold">
        Age
      </label>
      <input
        className="px-4 py-2 border-gray-400 border-solid border-[1px] rounded-md block w-[10ch] text-xl"
        required
        autoComplete="off"
        id="age"
        name="age"
        type="number"
        onChange={(e) => setData('age', e.target.value)}
        value={formData.age}
      ></input>
    </>
  )
}

export default Age
