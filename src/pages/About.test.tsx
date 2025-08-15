import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { About } from './About'

test('renders About heading', async () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  )

  expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Background/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Experience/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Technologies/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Tools/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Qualities/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Resume/i })).toBeInTheDocument()
})
