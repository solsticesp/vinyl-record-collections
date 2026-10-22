import { createRoot } from 'react-dom/client';
import Footer from './Footer';
import { expect, it } from 'vitest';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

it('should render the Footer component correctly - old school', () => {
    // Create html container element
    const container = document.createElement('div');

    // Attach container to DOM
    document.body.append(container);

    // Create react root
    const root = createRoot(container);

    // Render footer
    act(() => {
        root.render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
    })

    // Find the footer html element inside the dom tree
    const resultElement = document.querySelector('footer > div.footer-logo > div.tech');

    // Assert
    expect(resultElement.textContent).to.include('VINYL');

    // Manual cleanup
    root.unmount();
    container.remove();
});

it('should render the Footer component correctly - using testing library', () => {
    // Render footer
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    // Find the footer html element inside the dom tree
    const resultElement = screen.getByText('VINYL RECORDS LOVERS');

    // Assert
    expect(resultElement.textContent).to.include('VINYL');

});

it('should render the Footer component correctly - using jest-dom matchers', () => {
    // Render footer
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    // Assert
    expect(screen.getByText('VINYL RECORDS LOVERS')).toBeInTheDocument();
})