import { Link } from 'react-router-dom'

const Apply = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Buy insurance</h1>
      <ul>
        <li>
          <Link
            to="/buy/insurance-developer"
            className="bg-white shadow-sm hover:shadow-md hover:scale-[1.02] transition-all px-8 py-4 inline-block rounded-md mt-4"
          >
            👨🏼‍💻 Developer insurance
          </Link>
        </li>
        <li>
          <Link
            to="/buy/insurance-designer"
            className="bg-white shadow-sm hover:shadow-md hover:scale-[1.02] transition-all px-8 py-4 inline-block rounded-md mt-4"
          >
            🧑🏼‍🎨 Designer insurance
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Apply
