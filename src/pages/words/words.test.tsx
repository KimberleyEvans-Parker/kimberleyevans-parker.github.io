import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Words } from './Words.tsx'

describe('Words page', () => {
    it('shows Regenerate button when navigating to /words', () => {
        render(
            <MemoryRouter initialEntries={['/words']}>
                <Routes>
                    <Route path="/words" element={<Words />} />
                </Routes>
            </MemoryRouter>
        )
        expect(screen.getByRole('button', { name: /Regenerate/i })).toBeInTheDocument()
    })
})
