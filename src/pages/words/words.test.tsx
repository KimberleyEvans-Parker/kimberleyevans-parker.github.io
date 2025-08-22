import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Words } from './Words';

describe('Words page', () => {
    it('shows Regenerate button when navigating to /words', () => {
        render(
            <MemoryRouter initialEntries={['/words']}>
                <Routes>
                    <Route path="/words" element={<Words />} />
                </Routes>
            </MemoryRouter>
        );
        expect(screen.getByRole('button', { name: /Regenerate/i })).toBeInTheDocument();
    });
});
