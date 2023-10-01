import { MemoryRouter } from 'react-router-dom'
import { test, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DesignerForm from './DesignerForm'

describe('<DesignerForm />', () => {
  test('Completing the form should display a summary of the information entered', async () => {
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

    expect(screen.getByLabelText('First name')).toBeRequired()
    expect(screen.getByLabelText('Last name')).toBeRequired()

    await userEvent.type(screen.getByLabelText('First name'), data.firstName)
    await userEvent.type(screen.getByLabelText('Last name'), data.lastName)
    await userEvent.click(screen.getByRole('button', { name: 'Continue' }))

    expect(screen.getByLabelText('Age')).toBeRequired()

    await userEvent.type(screen.getByLabelText('Age'), data.age)
    await userEvent.click(screen.getByRole('button', { name: 'Continue' }))

    expect(screen.getByLabelText('Email')).toBeRequired()

    await userEvent.type(screen.getByLabelText('Email'), data.email)
    await userEvent.click(screen.getByRole('button', { name: 'Continue' }))

    expect(screen.getByText(data.firstName)).toBeInTheDocument()
    expect(screen.getByText(data.lastName)).toBeInTheDocument()
    expect(screen.getByText(data.age)).toBeInTheDocument()
    expect(screen.getByText(data.email)).toBeInTheDocument()
  })
})
