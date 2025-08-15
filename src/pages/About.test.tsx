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
})
