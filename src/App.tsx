import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import Confirmation from './multi-step-forms/Confirmation'
import { DesignerForm, DeveloperForm } from './multi-step-forms/forms'

const App = () => {
  return (
    <BrowserRouter>
      <header className="container mx-auto px-8 py-12">
        <Link to="/">🏠 Home</Link>
      </header>
      <main className="container mx-auto px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy/insurance-developer" element={<DeveloperForm />} />
          <Route path="/buy/insurance-designer" element={<DesignerForm />} />
          <Route path="/purchased" element={<Confirmation />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
