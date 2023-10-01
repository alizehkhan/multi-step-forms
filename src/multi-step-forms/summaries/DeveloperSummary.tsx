import { Link } from 'react-router-dom'
import { StepProps } from '../useForm'

interface DeveloperFormData {
  age: string
  email: string
}

const DeveloperSummary = <Form extends DeveloperFormData>({
  formData: { age, email },
}: StepProps<Form>) => {
  return (
    <>
      <p>Email:</p>
      <p className="mb-4 font-bold text-xl">{email}</p>
      <p>Age:</p>
      <p className="mb-4 font-bold text-xl">{age}</p>
      <Link
        to="/purchased"
        className="inline-block bg-green-800 mt-8 text-white rounded-md px-4 py-2"
      >
        Buy 💳
      </Link>
    </>
  )
}

export default DeveloperSummary
