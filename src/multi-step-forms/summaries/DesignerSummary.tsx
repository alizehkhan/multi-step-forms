import { Link } from 'react-router-dom'
import { StepProps } from '../useForm'

interface DesignerFormData {
  age: string
  email: string
  firstName: string
  lastName: string
}

const DesignerSummary = <Form extends DesignerFormData>({
  formData: { age, email, firstName, lastName },
}: StepProps<Form>) => {
  return (
    <>
      <p>First name:</p>
      <p className="mb-4 font-bold text-xl">{firstName}</p>
      <p>Last name:</p>
      <p className="mb-4 font-bold text-xl">{lastName}</p>
      <p>Email:</p>
      <p className="mb-4 font-bold text-xl">{email}</p>
      <p>Age:</p>
      <p className="font-bold text-xl">{age}</p>
      <Link
        to="/purchased"
        className="inline-block bg-green-800 mt-8 text-white rounded-md px-4 py-2"
      >
        Buy 💳
      </Link>
    </>
  )
}

export default DesignerSummary
