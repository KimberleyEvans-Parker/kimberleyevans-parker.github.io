import { render, screen } from '@testing-library/react'

import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

test('renders heading', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Provider>
  )

  expect(screen.getByRole('heading', { name: /Kimberley Evans-Parker/i })).toBeInTheDocument()

})
