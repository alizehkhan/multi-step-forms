import { MemoryRouter } from 'react-router-dom'
import { test, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DeveloperForm from './DeveloperForm'

describe('<DeveloperForm />', () => {
  test('Completing the form should display a summary of the information entered', () => {
    const data = {
      age: '45',
      email: 'spongebob@gmail.com',
    }

    render(
      <MemoryRouter>
        <DeveloperForm />
      </MemoryRouter>
    )

    expect(screen.getByLabelText('Age')).toHaveAttribute('required')

    userEvent.type(screen.getByLabelText('Age'), data.age)
    userEvent.click(screen.getByRole('button', { name: 'Continue' }))

    expect(screen.getByLabelText('Email')).toHaveAttribute('required')

    userEvent.type(screen.getByLabelText('Email'), data.email)
    userEvent.click(screen.getByRole('button', { name: 'Continue' }))

    expect(screen.getByText(data.age)).toBeInTheDocument()
    expect(screen.getByText(data.email)).toBeInTheDocument()
  })
})
