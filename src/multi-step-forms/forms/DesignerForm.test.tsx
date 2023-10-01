import { MemoryRouter } from 'react-router-dom'
import { test, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DesignerForm from './DesignerForm'

describe('<DesignerForm />', () => {
  test('Completing the form should display a summary of the information entered', () => {
    const data = {
      firstName: 'Spongebob',
      lastName: 'Squarepants',
      age: '45',
      email: 'spongebob@gmail.com',
    }

    render(
      <MemoryRouter>
        <DesignerForm />
      </MemoryRouter>
    )

    expect(screen.getByLabelText('First name')).toHaveAttribute('required')
    expect(screen.getByLabelText('Last name')).toHaveAttribute('required')

    userEvent.type(screen.getByLabelText('First name'), data.firstName)
    userEvent.type(screen.getByLabelText('Last name'), data.lastName)
    userEvent.click(screen.getByRole('button', { name: 'Continue' }))

    expect(screen.getByLabelText('Age')).toHaveAttribute('required')

    userEvent.type(screen.getByLabelText('Age'), data.age)
    userEvent.click(screen.getByRole('button', { name: 'Continue' }))

    expect(screen.getByLabelText('Email')).toHaveAttribute('required')

    userEvent.type(screen.getByLabelText('Email'), data.email)
    userEvent.click(screen.getByRole('button', { name: 'Continue' }))

    expect(screen.getByText(data.firstName)).toBeInTheDocument()
    expect(screen.getByText(data.lastName)).toBeInTheDocument()
    expect(screen.getByText(data.age)).toBeInTheDocument()
    expect(screen.getByText(data.email)).toBeInTheDocument()
  })
})
