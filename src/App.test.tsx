import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

test('renders heading', async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByRole('heading', { name: /Kimberley Evans-Parker/i })).toBeInTheDocument()

  // const btn = screen.getByRole('button', { name: /count/i })
  // await userEvent.click(btn)
  // expect(btn).toHaveTextContent(/count:\s*1/i)
})
